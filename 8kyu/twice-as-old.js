//Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

//My solution
function twiceAsOld(dadYearsOld, sonYearsOld){
  
    if(dadYearsOld > sonYearsOld*2){
      return (dadYearsOld - (sonYearsOld*2));
    }else if(dadYearsOld < (sonYearsOld*2)){
      return ((sonYearsOld*2) - dadYearsOld);
    }else{
      return 0;
    }
  }
//Top 3 solutions
//1
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }
//2
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
//3
function twiceAsOld(a, b) {
    return a>2*b ? a-2*b : 2*b-a;
  }