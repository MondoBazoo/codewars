//Write a function that returns a string in which firstname is swapped with last name.

//Example(Input --> Output)

//"john McClane" --> "McClane john"

//My solution
function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
  }

//Top 3 solutions
//1
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }
//2
const nameShuffler = str => str.split(' ').reverse().join(' ');
//3
function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
  } 