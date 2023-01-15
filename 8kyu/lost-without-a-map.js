//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]

//My solution
function maps(x){
    return x.map(x => x * 2);
  }

//Top 3 solutions
//1
function maps(x){
    return x.map(n => n * 2);
  }
//2
maps = x => x.map(e => e * 2);
//3
function maps(x){
    //return x.map(el => el * 2);
    let arr = [];
    for(let i = 0; i < x.length; i++){
    arr.push(x[i] * 2);
    }
    return arr;
    }