//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//Array can contain numbers or strings. X can be either.

//Return true if the array contains the value, false if not.

//Top 3 solutions
//1
const check = (a,x) => a.includes(x);
//2
function check(a,x){
    return a.includes(x);
  };
//3
function check(a,x){
    return a.indexOf(x) > -1 ? true : false;
  };