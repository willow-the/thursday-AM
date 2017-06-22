$(document).ready(function(){
  // your code goes below
  console.log("the page has loaded")
  $("textarea").keypress(function(event) {
  console.log("key pressed")
  console.log(event.key)  
   var letter = event.key; 
    console.log(letter);
  })
})