//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//Examples
//"www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1"

//My Solution
function removeUrlAnchor(url){
    return url.replace(/#.*$/g, "")
  }
//1
function removeUrlAnchor(url){
    return url.split('#')[0];
  }
//2
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }
//3
const removeUrlAnchor = url => url.replace(/#.+$/,'');
