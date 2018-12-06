$(document).ready(function(){
    // Generates a random number and prints it to the DOM.
    var randomNumber = Math.floor(Math.random()*100);
    $(".numberDiv").text(randomNumber);



});