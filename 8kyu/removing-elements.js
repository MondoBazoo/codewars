//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//None of the arrays will be empty, so you don't have to worry about that!

//Top 3 solutions
//1
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }
//2
function removeEveryOther(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }
//3
const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));