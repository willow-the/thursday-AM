$(document).ready(function(){
  console.log("The page has loaded!");
  $("textarea").keypress(function(event){
    var letter = event.key;
    console.log(letter);
  })
})