//Messi is a soccer player with goals in three leagues:
//LaLiga
//Copa del Rey
//Champions
//Complete the function to return his total number of goals in all three leagues.
//Note: the input will always be valid.

//For example:
//5, 10, 2  -->  17

//My solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

//Top 3 solutions
//1
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }
//2
const goals = (...a) => a.reduce((s, v) => s + v, 0);
//3
const goals = (a,b,c) => a + b + c; 
