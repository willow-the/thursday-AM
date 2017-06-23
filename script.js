$(document).ready(function(){
  // your code goes below
  $(".no").hide()
  console.log("hi")
  $(".clickIfYouDare").hide()
  $(".e").keypress(function(event){
    console.log("a key was pressed")
    if (event.key == "a"){
      console.log("the letter a was pressed")
      $("body").css("background-color", "#009A6E")
    }else if (event.key == "f"){
      console.log("a key of f was pressed")
      $("h1").css("color", "white")
    }else if (event.key == "p"){
      $(".clickIfYouDare").show()
    }else if(event.key == "n"){
      $("body").fadeOut("3000")
      $("body").fadeIn("3000")
    }else if (event.key == "e"){
      $("body").append("<p>hello, is anyone there?</p>")
    }else if (event.key == "i"){
      $(".e").css("transform", "translateX(80px)")
    }else if(event.key == "s"){
      $("h1").append("<h1>I'm trapped</h1>")
    }else if (event.key == "l"){
      $("body").css("background-image", "url('images/scaryclown.jpg')")
    }else if (event.key == "w"){
      $("body").append("<p>would you like to play a game</p>")
    }else if (event.key == "g"){
      $("body").prepend("help me!");
    }else if (event.key == "q"){
      $(".e").val("")
    }else if (event.key == "o"){
      $("body").css("background-image", "unset")
      $("body").css("background-color", "blue")

    }
    $(".clickIfYouDare").on("click", function(){
      $(".rest").hide()
      $("body").css("background-image", "unset")
      $("body").css("background-color", "black")
      $(".no").css("color", "white")
      $(".no").fadeIn(3000)
    })
  })
})