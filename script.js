$(document).ready(function(){
  // your code goes below
  console.log("hi")
  $("div").hide()
  $("textarea").keypress(function(event){
    var letter = event.key
    if (letter==="a") {
      $("body").css("background-color","darkGreen")
    }else if(letter==="f"){
      $("h1").css("color","white")
    }else if(letter==="p"){
      $("div").show()
    }else if(letter==="n"){
      $("body").fadeOut("slow")
      $("body").fadeIn("slow")
    }else if(letter==="e"){
      $("#d").text("hello, is anyone there?")
    }else if(letter==="i"){
      $("textarea").css("margin-left","80px")
    }else if(letter==="s"){
      $("h1").text("I'M TRAPPED")
    }else if(letter==="l"){
      $("body").css("background-image","url('images/scaryclown.jpg')")
    }else if(letter==="w"){
      $("#d").append("Would you like to play a game")
    }else if(letter==="g"){
      $("h3").prepend("HELP ME!!!")
    }else if(letter==="q"){
      $("textarea").text()
    }else if(letter==="o"){
      $("#body").css("background-image","none")
    }
  })
})
