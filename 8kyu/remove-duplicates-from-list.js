//Define a function that removes duplicates from an array of numbers and returns it as a result.

//The order of the sequence has to stay the same.

//Top 3 solutions
//1
function distinct(a) {
    return [...new Set(a)];
  }
  
//2
function distinct(a) {
    return Array.from(new Set(a));
  }
//3
function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
  }