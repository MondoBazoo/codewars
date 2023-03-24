//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//Examples:
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

//My solution
function solution(str, ending){
  return str.endsWith(ending);
}
//Top 3 solutions
//1
function solution(str, ending){
    return str.endsWith(ending);
  }
//2
const solution = (str, ending) => str.endsWith(ending);
//3
function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
  }