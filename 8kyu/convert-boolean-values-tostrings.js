//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//My solution
function boolToWord( bool ){
    return bool === true ? 'Yes' : bool === false ? 'No': 'Not a Boolean'
   }
//Top 3 solutions 
//1
function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }
//2
function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
//3
let boolToWord = bool => bool ? 'Yes' : 'No';