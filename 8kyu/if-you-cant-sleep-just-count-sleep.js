//If you can't sleep, just count sheep!!
//Task:
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//My solution
var countSheep = function (num){
    let str = "";
    for (let i = 1; i <= num; i++) { str += i + " sheep...";}
      return str;
  }

//Top 3 solutions
//1
var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }
//2
const countSheep = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
      val += `${i} sheep...`;
    }
    return val;
  }
//3
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

