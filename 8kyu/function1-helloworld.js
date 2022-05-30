//Make a simple function called greet that returns the most-famous "hello world!".
//Style Points
//Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

//My solution 
function greet(hello){
    hello = hello || "world!"
  return "hello " + hello;
  }

//Top 2 solutions  
//1
function greet() {
    return "hello world!";
    }

//2
// Write a function "greet" that returns "hello world!"
const greet = () => "hello world!";
