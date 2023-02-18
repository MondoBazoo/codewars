/*Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"*/

//My solution
function SeriesSum(n){
  let sum = 0;
  let denominator = 1;
  
  for(let i = 1; i <=n; i++){
    sum += 1 / denominator;
    denominator += 3;
  }
  return sum.toFixed(2);
}
//Top 3 solutions
//1
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }
//2
function SeriesSum(n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
  }
//3
function SeriesSum(n)
{
  for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}