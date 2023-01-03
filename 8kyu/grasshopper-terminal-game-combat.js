//Create a combat function that takes the player's current health and the amount of damage recieved, 
//and returns the player's new health. 
//Health can't be less than 0.


//My solution
function combat(health, damage) {
    if(health - damage < 0){
      return +0
    }else{
      return health - damage;
    }
  }

//Top 3 solutions
//1
function combat(health, damage) {
	return health < damage ? 0 : health - damage
}
//2
const combat = (health, damage) => Math.max(0, health - damage);
//3
function combat(health, damage) {
    return Math.max(health - damage, 0);
  }