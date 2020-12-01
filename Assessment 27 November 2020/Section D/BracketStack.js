/*
The Time and Space complexity of this function is describe using Big "O" Notation

Time Complexity - O(n)
The  solution iterates the length of the input string, so our time cost will grow in linear proportion to the growth of the string length.
 Or, for each character that is added to the input string, the algorithm will take 1 time unit longer to complete (worst case).
 All other operations in our algorithm are constant time because we are using object-property lookup to find our comparison 
 values and the pop method of a Stack data structure to keep track of all the parenthesis pairs that get opened.

Space complexity is also o(n)
because of the way the stack is constructed. if there are only opening brackets
and no closing brackets in the string. the BracketStack would end up being the same length as the 
input string

*/

function BracketStack() {
  let openBracketsCount = 0;
  this.isEmpty = function () {
    return openBracketsCount === 0;
  };
  this.push = function () {
    openBracketsCount++;
  };

  /**
   * @throws If stack is empty
   */

  this.pop = function () {
    if (this.isEmpty()) throw new Error("Cannot pop empty stack");
    openBracketsCount--;
  };
}

/**
 * @param {string} symbol
 * @returns A function that checks if a given value is the symbol
 */

function isSymbol(symbol) {
  /**
   * @param {string} value
   * @returns {boolean}
   */

  function check(value) {
    return symbol === value;
  }
  return check;
}

/**
 * Checks if a pair of brackets match
 * @param {string} inputString
 * @param {string} openingSymbol
 * @param {string} closingSymbol
 */

function doBracketsMatch(inputString, openingSymbol, closingSymbol) {
  let stack = new BracketStack();
  let isOpeningSymbol = isSymbol(openingSymbol);
  let isClosingSymbol = isSymbol(closingSymbol);
  for (let i = 0; i < inputString.length; i++) {
    let value = inputString[i];
    if (isOpeningSymbol(value)) stack.push();
    if (isClosingSymbol(value))
      if (stack.isEmpty()) return false;
      else stack.pop();
  }
  return stack.isEmpty();
}
