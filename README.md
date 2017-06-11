# THE GHOST WRITER!
##### In this lesson you will be using jQuery to create a spooky ghost writer web page.

### Let's start with the HTML
* Use the tags: `<h1>`, `<textarea>` to create a page that looks something like this.
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
* When the page loads hide the "click if you dare" `div`
* Bind jQuery's `keypress()` event to the textarea so that you can see when something is being typed in the textarea.
* `console.log("a key was pressed!")` inside the function to make sure it's working
* Now that we know when a key is typed, we want to be able to see which key is being typed...
* Use the variable event inside your function, then `console.log(event)` below. It should look something like this 

```
$("textarea").keypress(function(event){
    console.log(event)
``` 
