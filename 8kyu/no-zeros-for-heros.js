/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/

//My solution
function noBoringZeros(n) {
    return Number(n.toString().replace(/0+$/,  ''));
  }

//Top 3 solutions
//1
function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }
//2
function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
  }
//3
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
  }