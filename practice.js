$(document).ready(function(){
  // your code goes below
  console.log("The page has loaded")
  // $("textarea").keypress(function(){
  //   console.log("Key pressed in textarea!");
  //})
  //   $("textarea").keypress(function(event){
  //   console.log(event);
  //   console.log(event.key);
  // })
    $("textarea").keypress(function(event){
    var letter = event.key;
    console.log(letter);
  })
})