//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//Examples:
//Testing: [0, 0, 0, 1] ==> 1
/*Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11*/

//My solution

//Top 3 solutions
//1
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
//2
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
  };
//3
function binaryArrayToNumber(s) {
    if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
      return 1;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
      return 2;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
      return 3;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
      return 4;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
      return 5;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
      return 6;
    } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
      return 7;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
      return 8;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
      return 9;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
      return 10;
    } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
      return 11;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
      return 12;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
      return 13;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
      return 14;
    } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
      return 15;
    } else if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
      return 0;
    }
  }