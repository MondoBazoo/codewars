/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

//Top 3 solutions
//1
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }
//2
function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }
//3
const sumMix=x=>x.reduce((a,b)=>+b+a,0)