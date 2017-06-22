$(document).ready(function(){
  // your code goes below
  console.log("the page has loaded")
  $("textarea").keypress(function(event){
    console.log("key pressed in textarea")
    var letter = event.key
    console.log(letter);
  })

})