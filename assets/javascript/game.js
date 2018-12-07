$(document).ready(function () {

    // Array of crystal images to be printed to the DOM.
    var crystalImages = [
        "assets/images/bluecrystal.png",
        "assets/images/greenCrystal.png",
        "assets/images/orangeCrystal.png",
        "assets/images/redcrystal.png"
    ];

    // Holds the sum of the clicked crystals
    var gameScore = 0;
    // Holds the number to match.
    var randomNumber = 0;
    // Holds the number of wins.
    var wins = 0;
    // Holds the number of losses.
    var losses = 0;



    // Generates a random number between 50 and 100 and prints it to the DOM.
    function generateRandomNumber() {
        randomNumber = Math.floor(Math.random() * 50) + 50;
        $(".numberDiv").text(randomNumber);
    }
    generateRandomNumber();

    // Grabs an image for the 4 crystalImages array and prints it to the DOM
    for (i = 0; i < crystalImages.length; i++) {
        var crystal = $("<img>");
        crystal.attr("src", crystalImages[i]);
        crystal.attr("class", "gameCrystal");
        $(".crystalsDiv").append(crystal);

        // gets a random number between 1 and 15 for each crystal.
        function generateCrystalNumber() {
            var crystalValue = Math.floor(Math.random() * 14) + 1;
            crystal.attr("crystalValue", crystalValue);
        }
        generateCrystalNumber();
    }

    // Event listener on the crystals for a click.
    $(".gameCrystal").on("click", function () {

        // If the score is less then the number to be guessed...
        if (gameScore < randomNumber) {
            // store the crystal value in CrystalScore
            var crystalScore = $(this).attr('crystalValue');
            // Convert from string to Int, and add to gameScore.
            gameScore = gameScore + parseInt(crystalScore);
            // Print game score tot he DOM.
            $(".currentScoreDiv").text(gameScore);
        }
        // If the score equals the number to guess...
        if (gameScore === randomNumber) {
            // alert you win, increase the wins, and reset the game.
            alert("You Win!")
            wins++;
            $(".wins").text(wins);
            gameScore = 0;
            $(".currentScoreDiv").text(gameScore);
            generateCrystalNumber();
            generateRandomNumber();
        // If the gameScore goes over the number to guess...
        } else if (gameScore > randomNumber) {
            // Alert you lose, increase losses, reset the game. 
            alert("You Lose!");
            losses++;
            $(".losses").text(losses);
            gameScore = 0;
            $(".currentScoreDiv").text(gameScore);
            generateCrystalNumber();
            generateRandomNumber();
        }
    });



});