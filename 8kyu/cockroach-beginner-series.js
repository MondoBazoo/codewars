//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//For example:

//1.08 --> 30
//Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//My solution
function cockroachSpeed(s){
    return Math.floor(s * 27.778);
  } 
//1
const cockroachSpeed = s => Math.floor(s / 0.036);
//2
function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
  }
//3
function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
  }