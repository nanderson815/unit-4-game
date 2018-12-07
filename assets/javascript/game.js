$(document).ready(function () {

    // Array of crystal images.
    var crystalImages = [
        "assets/images/bluecrystal.png",
        "assets/images/greenCrystal.png",
        "assets/images/orangeCrystal.png",
        "assets/images/redcrystal.png"
    ];

    var gameScore = 0;
    var randomNumber = 0;
    var wins = 0;
    var losses = 0;



    // Generates a random number between 50 and 100 and prints it to the DOM.
    function generateRandomNumber() {
        randomNumber = Math.floor(Math.random() * 50) + 50;
        $(".numberDiv").text(randomNumber);
    }
    generateRandomNumber();

    // Grabs an image for the crystalImages array and prints it to the DOM
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

    $(".gameCrystal").on("click", function () {

        if (gameScore < randomNumber) {
            var crystalScore = $(this).attr('crystalValue');
            gameScore = gameScore + parseInt(crystalScore);
            $(".currentScoreDiv").text(gameScore);
        }

        if (gameScore === randomNumber) {
            alert("You Win!")
            wins++;
            $(".wins").text(wins);
            gameScore = 0;
            $(".currentScoreDiv").text(gameScore);
            generateCrystalNumber();
            generateRandomNumber();

        } else if (gameScore > randomNumber) {
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