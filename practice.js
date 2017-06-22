$(document).ready(function(){
  // your code goes below
  console.log("the page is loaded");
  $("textarea").keypress(function(event){
  // what to do when a key is pressed
  var letter = event.key;    
  console.log(letter);
  })
})