$(document).ready(function(){
  // your code goes below
  $("p").hide();
  $("textarea").keypress(function(event){
    var letter = event.key
    console.log("A Key was Pressed!");
    console.log(letter);
    if (letter == "a") {
     console.log("An 'a' was typed."); 
    $("body").css("background-color", "#2a5631");
    } else if(letter == "e"){
      $("h1").css("color", "white");
    } else if (letter == "p") {
      $("p").show();
    } else if (letter == "n") {
      $("body").fadeOut("3000", function(){
      });
    }














    //   else if(letter != "a"){
    //   console.log("A letter other than 'a' was pressed.");
    // }
  })


})