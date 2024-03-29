//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

//Example:

//sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
//This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//My solution
var sayHello = ( name, city, state ) => `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`

//Top 3 solutions
//1
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
    }
//2
function sayHello( name, city, state ) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
  }
//3
const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
//4
var sayHello = (n, c, s) => `Hello, ${n.join(' ')}! Welcome to ${c}, ${s}!`;
//5
/say hello
c
//
//