$(document).ready(function(){
  // your code goes below
$("textarea").on("keypress", function(event) {
  console.log(event.key);
})
})