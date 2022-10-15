//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//Examples (input -> output)
//6, "I"     -> "IIIIII"
//5, "Hello" -> "HelloHelloHelloHelloHello"


//My solution
function repeatStr (n, s) {
    return s.repeat(n);
  }
//Top 3 solutions 
//1
function repeatStr (n, s) {
    return s.repeat(n);
  }
//2
repeatStr = (n, s) => s.repeat(n)
//3
function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }