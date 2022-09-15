//In this kata you will create a function that takes in a list and returns a list with the reverse order.
//Examples (Input -> Output)
//* [1, 2, 3, 4]  -> [4, 3, 2, 1]
//* [9, 2, 0, 7]  -> [7, 0, 2, 9]

//My solution
function reverseList(list) {
    return list.reverse();
  }

//Top 3 solutions
//1
function reverseList(list) {
    return list.reverse();
  }
//2
const reverseList = list => list.reverse();
//3
function reverseList(list) {
    return list.slice().reverse();
  }