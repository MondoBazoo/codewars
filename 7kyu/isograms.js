//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//Example: (Input --> Output)

//"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

//My solution
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
//Top 3 solutions
//1
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }
  
//2
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
  //z.
//3
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }
  //4
  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }