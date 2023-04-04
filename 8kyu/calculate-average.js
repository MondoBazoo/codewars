//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

//My solution
function find_average(arr) {
  return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
//Top 3 solution
//1
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }
//2
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }
//3
function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}