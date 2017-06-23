$(document).ready(function(){

$("textarea").on("keypress", function(event){
console.log(event.key);
})

$("#clickIfYouDare").hide();

$("textarea").keypress(function(event){
  console.log("a key was pressed!")
  if(event.key=="a"){
    $("body").css("background-color", "#11561c")
  }
  else if(event.key=="f"){
    $("h1").css("color", "white")
  }

  else if(event.key=="p"){
    $("#clickIfYouDare").show();
  }

  else if(event.key=="n"){
    $("body").fadeOut(3000)
    $("body").fadeIn(3000)
  
  }
  
  else if(event.key=="e"){
    $("body").append("Is anyone there...");
  }

  else if(event.key=="i"){
    $("textarea").css("transform","translateX(80px)");
  }

  else if(event.key=="s"){
    $("h1").text("I'M TRAPPED");
  }

  else if(event.key=="l"){
    $("body").css("background-image","url('https://ericlahti.files.wordpress.com/2016/10/clowns-1.jpg')");}

  else if(event.key=="w"){
    $("body").prepend("<h3>HELP ME!!!!</h3>");
}
  else if(event.key=="q"){
    $("textarea").val("")
  }

  else if(event.key=="o"){
    $("body").css("background", "white")
  }

})
})