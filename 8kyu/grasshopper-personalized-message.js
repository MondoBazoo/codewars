//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message:
//case	return
//name equals owner	'Hello boss'
//otherwise	'Hello guest'

//My solution
function greet (name, owner) {
    if(name === owner){
      return 'Hello boss';
    }else{
      return 'Hello guest';
    }
  }
//Top 3 solutions
//1
function greet (name, owner) {
    return name === owner ? 'Hello boss' :  'Hello guest';
  }
//2
function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }
//3
function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss';
    }
    return 'Hello guest';
  }
  