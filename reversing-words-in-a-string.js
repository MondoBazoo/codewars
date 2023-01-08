/*You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"*/

//My solution
function reverse(string){
    return string.split(' ').reverse('').join(' ');
  }

//Top 3 solutions
//1
function reverse(string){
    return string.split(' ').reverse().join(' ');
  }
//2
reverse = s => s.split(' ').reverse().join(' ')
//3
function reverse(string){
    // validate input
    if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
    // just use the dumb way out since it's jabbascripps
    return string.split(' ').reverse().join(' ');
  }