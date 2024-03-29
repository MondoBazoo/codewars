//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

//Example:

//h = 0
//m = 1
//s = 1

//result = 61000
//Input constraints:

//0 <= h <= 23
//0 <= m <= 59
//0 <= s <= 59

//My solution
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
//Top 3 solutions 
//1
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }
//2
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
//3 
function past(h, m, s){
    var miliseconds = 0;
    miliseconds = miliseconds + s * 1000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + h * 3600000;
    return miliseconds;
  }
  function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }