module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  let OPEN_BRACKETS = []; 
  let BRACKETS_PAIR = {};
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }

  // console.log('OPEN_BRACKETS: ', OPEN_BRACKETS);
  // console.log('BRACKETS_PAIR: ', BRACKETS_PAIR);

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    // console.log('currentSymbol: ', currentSymbol);
  
    if (OPEN_BRACKETS.includes(currentSymbol)) {

        stack.push(currentSymbol);
        // console.log('stack: ', stack);

    }  else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];
      // console.log('topElement: ', topElement);
      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false
      }
    }
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === stack[i-1]) stack = []
    }
  } 
return stack.length === 0;
}
