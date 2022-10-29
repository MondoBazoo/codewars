/*Use variables to find the sum of the goals Messi scored in 3 competitions

Information

Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Task

Create these three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.*/

//Top 3 solutions
//1
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals
//2
/*
  In a real situation, you can do without variables,
  but tests are not performed if there are no variables.
  My code is aimed at potential expansion. Suddenly, someone wants to
  enter more data on the goals of Messi? In this case, you can simply
  add the object to my array. 
  ===========================
  Thanks for reading this, friend.
  Good mood and coding!
*/

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

const goalScoringStatistics = [
  {
    competition: 'La Liga',
    goals: laLigaGoals,
  },
  {
    competition: 'Champions League',
    goals: championsLeagueGoals,
  },
  {
    competition: 'Copa del Rey',
    goals: copaDelReyGoals,
  }
]

const countGoals = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    sum += item.goals;
  });
  return sum;
}

var totalGoals = countGoals(goalScoringStatistics);
//3
var laLigaGoals = 43,
    championsLeagueGoals = 10,
    copaDelReyGoals = 5,
    totalGoals = 58;