/*Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */

//My solution
function replace(s){
    return s.replace(/[aeiou]/gi, "!");
  }

//Top 3 solutions
//1
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }
//2
function replace(s) {
    return s.replace(/[aeiou]/ig, '!');
  }
//3
const replace = s => s.replace(/[aeiou]/gi, '!');