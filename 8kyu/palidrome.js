//Write a function that checks if a given string (case insensitive) is a palindrome.

//Top 3 solutions
//1
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
//2
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
//3
const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');