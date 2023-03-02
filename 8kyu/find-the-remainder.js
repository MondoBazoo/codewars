/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:

n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

//My solution
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    if(n > m){
      return n %= m;
    }else{
      return m %= n;
    }
}
//Top 3 solutions
//1
function remainder(a, b){
    return a > b ? a % b : b % a;
  }
//2
function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    var min = Math.min(a,b);
    var max = Math.max(a,b);
  
    return min ? max % min : NaN;
  }
//3
function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    if(b>a)
      return b%a;
    else
      return a%b;
  }