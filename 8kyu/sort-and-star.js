//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

//The returned value must be a string, and have "***" between each of its letters.

//You should not remove or add elements from/to the array

//My solution
function twoSort(s) {
    const firstSort = s.sort().slice(0, 1).join('');
    return firstSort.split('').join('***');
  }
//Top 3 solutions
//1
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }
//2
twoSort = s => s.sort()[0].split('').join('***')
//3
function twoSort(s) {
    s.sort();
    return s[0].split('').join('***');
  }