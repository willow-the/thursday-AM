$(document).ready(function(){
  // your code goes below
$("#cool").hide()
console.log("ello")
$('textarea').on('keypress', function(event) {                    
console.log("the key " + event.key + " was pressed")
if (event.key == "a") {
$('body').css("background", "darkgreen")
}
 else if (event.key == "f") {
$('h1').css("color", "white")
}

 else if (event.key == "p") {
$("#cool").show()
}
 else if (event.key == "n") {
$('body').fadeOut(500)
$('body').fadeIn(500)

}
else if (event.key == "e") {
$('body').append('<p>hello, anyone there?</p>')

}
else if (event.key == "i") {
$('textarea').css("float", "right")

}
else if (event.key == "l") {
$('body').css("background-image", "url('images/scaryclown.jpg')")


}
else if (event.key == "s") {
$("h1").text("HELP ME...")
}
else if (event.key == "w") {
$('body').append('<p><em>Do you want to play a game? >:)</em></p>')

} else if (event.key == "g") {
$('body').prepend('<h3><em>squeak</em></h3>')

} else if (event.key == "q") {
$("textarea").val("") 

} else if (event.key == 'o') {
$('body').css("background", "white") 

}
$('#cool').on('click', function() {
$('body').css("background", "black")
$('body').prepend("<h2>You Will never escape</21>")
$('h2').css("color", "grey")




})

})
})
