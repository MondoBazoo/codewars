//Your task is to write function factorial.

//https://en.wikipedia.org/wiki/Factorial

//Top 3 solutions
//1
const factorial = n => n ? factorial(n - 1) * n : 1;
//2
function factorial(n){
    let answer = 1;
    
    while (n > 0) {
      answer *= n;
      n--;
    }
    
    return answer;
  }
//3
function factorial(n){
    return n ? n * factorial(n-1) : 1;
  }