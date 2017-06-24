$(document).ready(function(){
  console.log("This is my page.");
  $("div").hide();
  $("textArea").keypress(function(event){
    var letter = event.key;
    if(letter==="a"){
      $("body").css("background-color", "darkgreen");
  } else if(letter==="f"){
      $("h1").css("color", "white");
    } else if(letter==="p"){
        $("div").show();
    } else if(letter==="n"){
        $("body").fadeOut("slow");
        $("body").fadeIn("slow");
    } else if(letter==="e"){
        $("body").append("<p>hello, is anyone there?</p>");
    } else if(letter==="i"){
        $("#textArea").css("margin-left", "80px");
    } else if(letter==="s"){
        $("h1").replaceWith("<h1>I'M TRAPPED</h1>")
    } else if(letter==="l"){
        $("body").css("background-image", "url(images/scaryclown.jpg)")
    } else if(letter==="w"){
        $("body").append("<p>Would you like to play a game?")
    } else if(letter==="g"){
        $("body").prepend("<h3>HELP ME!!!!</h3>")
    } else if(letter==="q"){
        $("textarea").val(" ")
    } else if(letter==="o"){
        $("body").css("background-image", "none")
    } else if(letter==="v"){
        $("textarea").addClass('animated flash infinite')
    }
  })
  $("div").click(function(){
    $("body").css("background-color", "black");
    $("body").prepend("<h1>YOU'LL NEVER ESCAPE</h1>")
  })
})