//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//My solution
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;
//Top 3 solutions
//1
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

//2
function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
  }

//3
function problem(x){
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
  }
  
  //4
  function prob(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";

  /////5
  const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;
  //
  }