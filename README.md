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

