//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//My solution
function removeExclamationMarks(s){
    return s.replace(/!/g, '');
  }

//Top 3 solutions
//1
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }
//2
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }
//3
const removeExclamationMarks = s => s.replace(/!/g,"") ;
