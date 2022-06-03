//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'

//My solution
function solution(str){
    return str.split("").reverse().join("");
  }

//Top 3 solutions
//1
function solution(str){
    return str.split('').reverse().join('');  
  }
//2
const solution = str => str.split('').reverse().join('');
//3
const solution = s => [...s].reverse().join('')