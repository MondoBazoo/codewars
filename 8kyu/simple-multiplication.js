//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise

//My solution 
function simpleMultiplication(number) {
    if(number % 2 == 0){
      return number * 8;
    }else{
      return number * 9;
    }
 }
//1
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
//2
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }
//3
function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}