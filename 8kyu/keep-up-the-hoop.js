//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//My solution
function hoopCount (n) {
    return n < 10 
    ? 'Keep at it until you get it' 
    : 'Great, now move on to tricks';
 }
 
//Top 3 solutions
//1
function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }
//2
function hoopCount (n) {
    const HOPS_LIMIT = 10
    return n >= HOPS_LIMIT
      ? 'Great, now move on to tricks'
      : 'Keep at it until you get it';
 }
//3
const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
