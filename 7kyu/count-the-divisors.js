/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.*/

//Top 3 solutions
//1
function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
  }
//2
function getDivisorsCnt(n) {
    var cnt = 1;
    for (var i = 0; i <= n / 2; ++i)
      if (n % i == 0)
        ++cnt;
    return cnt;
  }
//3
function getDivisorsCnt(n) {
    var div = 0;
    for(var i = 1; i <= n; i++) if(n % i == 0) div++;
    return div;
  }