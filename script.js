$(document).ready(function(){
  $("#click").fadeOut(100)
  $( "textarea" ).keypress(function() {
    console.log("a key was pressed");
    if (key.which==65) {
      console.log("it worked!!!");
    }

});


})
