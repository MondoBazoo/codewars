//Simple, remove the spaces from the string, then return the resultant string.

//My solution
function noSpace(x){
    return x.replace(/\s/g, "");
  }

//Top 3 solutions
//1
function noSpace(x){
    return x.replace(/\s/g, '');
  }

//2
function noSpace(x){return x.split(' ').join('')}

//3
const noSpace = x => x.replace(/ /g, "");