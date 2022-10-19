//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!
//Note:
//Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//Top 3 solutions
//1
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
//2
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++){
      classAvg += classPoints[i]; 
    }
    classAvg = classAvg/classPoints.length; 
    return yourPoints > classAvg;
  }
//3
function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classPointsSum / classPoints.length;
    const isBetter = yourPoints > classAverage;
    return isBetter;
  }

  