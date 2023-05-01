//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

//If you need help, here's a reference:

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

//Top 3 solutions
//1
function take(arr, n) {
    return arr.slice(0, n);
  }
//2
let take = (arr, n) => arr.slice(0, n);
//3
const take = (a, n) => a.slice(0, n);