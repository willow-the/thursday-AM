# THE GHOST WRITER!
##### In this lesson you will be using jQuery to create a spooky ghost writer web page.

### Let's start with the HTML
* Use the tags: `<h1>` and `<textarea>` to create a page that looks something like this.
![screen](images/example.png)


*If you are stuck trying to make the textarea bigger, here's a [hint](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_textarea)*
* Add a `<div>` to the page that has a `<p>` inside it saying "click if you dare"

### Some CSS
* Put a border around the "click if you dare" `div` 
* Add some padding to the "click if you dare" `div`
* Use the `float` CSS property to push the "click if you dare" `div` to the right

### The sPoOkY jQuery
#### Just a quick check
* Go to your `script.js` file
* `console.log` something inside the `$(document).ready(function(){` to make sure it's working
#### Okay, let's figure out `keypress()`
* Before we dive into a new jQuery function, write some code that hides the "click if you dare" `div` once the page is loaded
* Now, we want to know when someone types in the `<textarea>`. May I suggest, jQuery's `keypress()` event.
* Once you've set up the `keypress()` function use `console.log("a key was pressed!")` inside the function to make sure it's working.
* Now that we know when a key is typed, we want to be able to see which key is being typed...
* Use the variable event inside your function, then `console.log(event)`  It should look something like this 

```
$("textarea").keypress(function(event){
    console.log(event)
``` 
* Find a function in the console that will help you determine if the user typed an "a". Hint...it starts with a "k".
* Inside our `keypress` function, we need to save the event key in a variable, since we'll be using it over and over again to make sPoOkY things happen to our website.  
* Now, let's use an if/else statement to figure out whether the key we typed was an 'a' or not. If the key typed is an 'a', print out "An 'a' was typed!". If any other letter is typed, print out "A key other than 'a' was typed."


### Okay spoookify
* When someone types an 'a', instead of console logging, let's get the ghost to set the background color to darkgreen. You can use jQuery selectors, and the css() function to do this. 
* If someone types an 's': change the text of the `<h1>` tag to say "I'M TRAPPED". The jQuery text() function might come in handy here. 
* If someone types a 'p': let's show the 'Click if you dare' div that we hid earlier. 
* If someone types a 't': append 'hello, is anyone there?' to the body of the HTML. Enclose what you append in `<p>` tags. 
* If someone types an 'r': change the color of the `<h1>` tag to white. 
* If someone types a 'c': move the textarea 80px to the right. You can do this with the css() function. 
* If someone types a 'w': clear out all the text in the textarea. Hint: you can use the val() function to set the value of the textarea to an empty string. 
* If someone types an 'm': fadeOut the `<body>` slowly, and then fade it back in slowly. Hint: this might take two lines of code. 
* If someone types an 'i': set the background image of the `<body>` to the url of the scaryclown.jpg image inside the images folder. 
* If someone types an 'o': remove the scary clown background image of the `<body>`. [Hint](https://stackoverflow.com/questions/6747176/how-can-i-remove-a-background-image-attribute).
* If someone types a 'g': PREPEND 'HELP ME!!!' inside an `<h3>` tag.
* If someone types a 'v': APPEND 'Would you like to play a game' bolded and inside a `<p>` tag. 
* And now, go back to Chrome and push all the keys really quickly to see what happens!


### If you dare...
* Use the `click()` function to capture a click on the 'Click if you dare' div.
* Console.log 'clicked!' inside your click function to make sure it's working.
* Now it's time to really scare some people. When someone clicks on the 'Click if you dare' div, make your webpage do this: ![gif](images/youll_never_escape.gif)










