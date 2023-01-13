/* Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:

Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples

minValue ({1, 3, 1})  ==> return (13)
Explanation:

(13) is the minimum number could be formed from {1, 3, 1} , Without duplications */

//Top 3 solutions
//1
function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }
//2
function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
  }
//3
function minValue(values){
    return Number(Array.from(new Set(values)).sort().join(''))
  }