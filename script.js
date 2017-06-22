$(document).ready(function(){
  // your code goes below
  console.log("bob");
  $("div").hide()
  $("textarea").keypress(function(event){
    var letter = event.key;
    if(letter == "a"){
     $("body").css("background-color", "#006400")
    }else if(letter == "f"){
     $("h1").css("color", "white") 
    }else if(letter == "p"){
      $("div").show()    
    }else if(letter == "n"){
      $("body").fadeOut("slow")
      $("body").fadeIn("slow")
    }else if(letter == "e"){
      $("body").append("<p>hello, is anyone there?</p>")
    }else if(letter == "i"){
      $("textarea").css("right", "80px")
    }else if(letter == "s"){
      $("h1").text("I'M TRAPPED")
    }
  })
})