$(document).ready(function(){
  $("#click").hide()
console.log("Hi dudes")
 
 $("textarea").on("keypress", function(event) {
  if (event.key == "a") {
    $("body").css("background-color", "darkgreen")
}
  else if (event.key == "f") {
    $("h1").css("color", "white")
  }
  else if (event.key == "p") {
    $("#click").show()
  }
  else if (event.key == "n") {
    $("body").fadeOut(2000)
    $("body").fadeIn(2000)
  }
  else if (event.key == "e") {
    $("body").append("<p>Hello, is anyone there?</p>")
  }
  else if (event.key == "i") {
    $("textarea").css("transform", "translateX(300px)")  
  }
  else if (event.key == "s") {
    $("h1").replaceWith("<h1>Im Trapped!!!</h1>") 
  }
  else if (event.key == "l") {
    $("body").css("background-image" , "url('images/scaryclown.jpg')")
  }
   else if (event.key == "w") {
    $("body").append("<p>Would you like to play a game?</p>")
  }
  else if (event.key == "g") {
    $("body").prepend("<h3>Help Me!!!!!!</h3>")
  }
  else if (event.key == "q") {
    $("textarea").val("")
  }
  else if (event.key == "o") {
    $("body").css("background-image", "unset")
  }
  $("#scary").on("click" , function(){
    console.log("clicked")
    $("body").css("background-color", "black")
    $("textarea").hide()
    $("body").append("<h1 id = 'escape'>You'll Never Escape!!!! <br> HA HA HA</h1>")
    
})
})
  
})

