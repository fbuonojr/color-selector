//page cannot be manipulated until document is ready
$(document).ready(function(){

    var colorsOfText = [];

    var targetColor;

    var targetColorOfText;

    var userAnswer;

    var colors = [
        "brown",
        "blue",
        "magenta",
        "teal",
        "coral",
        "black"
    ];

    //this function sets a random color and a random set of colors
    function randColor() {
        //sets random word
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        $("#rand-target-color").text(targetColor);

        //sets random word color
        targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
        $("#rand-target-color").css("color", targetColorOfText);
    }

    //this function creates the logic for the game
    function createColorPicker() {

        //color array shuffler
        colors.sort(function() {
            return 0.5 - Math.random();
        });

        //push to text color array
        for (var i = 0; i < colors.length; i++){
            colorsOfText.push(colors[i]);
        }

        //shuffle text color array
        colorsOfText.sort(function() {
            return 0.5 - Math.random();
        });

        //for loop to create elements in document
        for(var i = 0; i < colors.length; i++){

            var holder = document.createElement("li");
            $("#color-picker").append(holder);

            $(holder).attr("id", colors[i]).text(colors[i]);

            $(holder).css("color", colorsOfText[i]);
        }
    }

    //this function clears divs and arrays each round
    function clear() {
        $("#rand-target-color").empty();
        $("#color-picker").empty();
        colorsOfText = [];
    }

    //this function resets colors and sets new colors
    function reset() {
        clear();
        randColor();
        createColorPicker();
    }

    //get id of element clicked by user
    $("color-picker").click(function(event) {
        userAnswer = event.target.id;

        //compare to see if correct
    })
});