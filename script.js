$(document).ready(function(){
  // your code goes below
  console.log("Page loaded")
  $("div").hide();
  $("textarea").keypress(function(event){
    console.log("a key was pressed!");
    console.log(event.keyCode);
    if (event.which == 97 || event.which == 65){ //a is pressed
      $("body").css("background-color", "darkgreen");
    } else if(event.which == 102 || event.which == 70){ // f is pressed
      $("h1").css("color", "white");
    } else if(event.which == 112 || event.which == 80){ // p is pressed
      $("div").show();
    } else if(event.which == 110 || event.which == 78){ // n is pressed
      $("body").fadeOut(500);
      $("body").fadeIn(500);
    } else if(event.which == 101|| event.which == 69){ // e is pressed
      $("body").append("<p>hello, is anyone there</p>");
    } else if(event.which == 105 || event.which == 73){ // i is pressed
      var currentPos = $("textarea").position();
      $("textarea").css("position", "relative");
      $("textarea").css("left", currentPos.left + 80 + "px");
    } else if(event.which == 115 || event.which == 83){ // s is pressed
      $("h1").text("I'M TRAPPED")
    } else if(event.which == 108 || event.which == 76){ // l is pressed
      $("body").css("background-image", "url(images/scaryclown.jpg)");
    } else if (event.which == 119 || event.which == 87){ // w is pressed
      $("body").append("<p>Would you like to play a game</p>");
    } else if (event.which ==103 || event.which == 71){ // g is pressed
      $("body").prepend("<h3>HELP ME!!!</h3>");
    }
  });
})