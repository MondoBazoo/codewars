//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//[Make sure you type the exact thing I wrote or the program may not execute properly]

//My solution
let name = "Isaiah"
function greet(name){
  return 'Hello, ' + name + ' how are you doing today?';
}

// Top 3 solutions 
//1
function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

//2
const greet = name => `Hello, ${name} how are you doing today?`;

//3
// Return a greeting string
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
  }