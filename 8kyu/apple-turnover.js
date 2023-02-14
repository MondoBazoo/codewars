//Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

//My solution
function apple(x){
    return Math.pow(x, 2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
  }

//Top 3 solutions
//1
function apple(x){
    return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
  }
//2
function apple(x){
  
    if (Math.pow(x,2) > 1000) {
      return "It's hotter than the sun!!";
    } else {
      return "Help yourself to a honeycomb Yorkie for the glovebox.";
    
    }
  
  }  
//3
function apple(x) {
    return x ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
  }