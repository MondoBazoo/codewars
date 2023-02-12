/*Task Overview

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 
to_binary(5)  /* should return 101 
to_binary(11) /* should return 1011 
Example:

toBinary(1)  /* should return 1 
toBinary(5)  /* should return 101 
toBinary(11) /* should return 1011 */ 

//Top 3 solutions
//1
let toBinary = n => +n.toString(2)
//2
toBinary = (n) => parseInt(n.toString(2));
//3
function toBinary(n){
    return +n.toString(2);
  }
