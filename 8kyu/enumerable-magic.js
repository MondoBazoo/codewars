//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//My solution
function include(arr, item){
    return arr.includes(item);
  }

//Top 3 solutions
//1
function include(arr, item){
    return arr.includes(item);
  }
//2
const include = (arr, item) => arr.includes(item);
//3
function include(arr, item) {
    return arr.indexOf(item) !== -1;
  }