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
  
})
})