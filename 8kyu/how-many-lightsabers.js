/*Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18*/

//My solution
function howManyLightsabersDoYouOwn(name) {
    return name == 'Zach' ? 18 : 0;
  }
//Top 3 solutions
//1
function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
  }
//2
let howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;
//3
var howManyLightsabersDoYouOwn = function(name) {
    return (name == "Zach") ? 18 : 0; 
  }