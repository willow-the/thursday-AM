$(document).ready(function(){
  // your code goes below
  console.log("IT'S ALIVE");
  $("div").hide();
  $("textarea").keypress(function(event){
    console.log("A key was pressed!");
    var letter = event.key;
    console.log(letter)
    if(letter == "a"){
      console.log('An "a" was typed');
      $("body").css("background-color", "darkgreen");
    }else if(letter == "f"){
      $("body").css("background-color", "white");
    }else if(letter == "p"){
      $("div").show()
    }else if(letter == "n"){
      $("body").fadeOut(3000, function(){
        $("body").fadeIn(3000)
      })
    }else if(letter == "e"){
      $("body").append("<p>Hello, is anyone there?</p>")
    }else if(letter == "i"){
      $("textarea").css({"position": "relative", "left" : "80px"});
    }else if(letter == "s"){
      $("h1").text("I'M TRAPPED");
    }else if(letter == "l"){
      $("body").css("background-image", 'url("images/scaryclown.jpg")');
    }else if(letter == "w"){
      $("body").append("<p>Would you like to play a game?</p>");
    }else if(letter == "g"){
      $("body").prepend("<h3>HELP ME!!!</h3>");
    }else if(letter == "q"){
      $("textarea").val("")
    }else if(letter == "o"){
      $("body").css("background-image", "none")
    }else{
      console.log('A key other than "a" was typed');
    }
  })
  $("div").click(function(){
    console.log("button clicked");
    $("*").css({"background-color": "black","background-image", "none"})
  })
})