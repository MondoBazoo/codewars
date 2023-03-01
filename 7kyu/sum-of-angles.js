//Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//My solution
function angle(n) {
    return (n - 2) * 180;
  }

//Top 3 solutions
//1
const angle = n => (n - 2) * 180;
//2
function angle(n) {
    return 180*(n-2);
  }
//3
const angle = n => 180 * (n - 2)