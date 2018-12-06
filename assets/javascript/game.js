$(document).ready(function(){

    // Array of crystal images.
    var crystalImages = [
        "assets/images/bluecrystal.png",
        "assets/images/greenCrystal.png",
        "assets/images/orangeCrystal.png",
        "assets/images/redcrystal.png"
    ];


    // Generates a random number and prints it to the DOM.
    var randomNumber = Math.floor(Math.random()*100);
    $(".numberDiv").text(randomNumber);

    for ( i=0; i < crystalImages.length; i++){
        var crystal = $("<img>");
        crystal.attr("src", crystalImages[i]);
        $(".crystalsDiv").append(crystal);
    }

});