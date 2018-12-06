$(document).ready(function () {

    // Array of crystal images.
    var crystalImages = [
        "assets/images/bluecrystal.png",
        "assets/images/greenCrystal.png",
        "assets/images/orangeCrystal.png",
        "assets/images/redcrystal.png"
    ];


    // Generates a random number between 50 and 100 and prints it to the DOM.
    var randomNumber = Math.floor(Math.random() * 50) + 50;
    $(".numberDiv").text(randomNumber);

    // Grabs an image for the crystalImages array and prints it to the DOM
    for (i = 0; i < crystalImages.length; i++) {
        var crystal = $("<img>");
        crystal.attr("src", crystalImages[i]);
        $(".crystalsDiv").append(crystal);

        // gets a random number between 1 and 25 for each crystal.
        var crystalValue = Math.floor(Math.random()*24)+1;
        crystal.attr("crystalValue", crystalValue);
    }

});