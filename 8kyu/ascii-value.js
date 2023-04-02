//Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

//Example:

//get_char(65)
//should return:

//'A'

//My solution
function getChar(c) {
  return String.fromCharCode(c)
}

//Top 3 solutions
//1
const getChar = String.fromCharCode;
//2
function getChar(c) {
    return String.fromCharCode(c)
  }
//3
var getChar = c => String.fromCharCode(c);

