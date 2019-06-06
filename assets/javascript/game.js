//Variables 

var wins = 0;
var losses = 0;
var randomStart = 0;
var totalScore = 0;
var characters = ["", "", "", ""];


//Run Random Number 
function randomStartNumber() {
    randomStart = Math.floor(Math.random() * 101) +19;
    console.log(randomStart);
};


//Random number for each Image
function randomImageNumber() {
    for(var i = 0; i < characters.length; i++) {
        characters[i] = Math.floor(Math.random() * 11) +1; 
        console.log(characters[i]);
    }
    
};


//Reset Game
function reset() {
    totalScore = 0;
    $("#yourScore").text(totalScore);
    randomStartNumber();
    $("#randomNumber").text(randomStart);
}



function addNumberForEach() {
    $("#yourScore").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#randomNumber").text(randomStart);
    score();
};



//Hitting the exact number or going over
function score() {
    if(totalScore === randomStart) {
        wins++;
        alert("The Force is Strong with this One!!!")
        $("#wins").text(wins);
        reset();
    }else if(totalScore > randomStart) {
        losses++;
        alert("You have failed me for the last time!!!")
        $("#losses").text(losses);
        reset();
    }
};


//Image click events
$("#yoda").on("click", function() {
    totalScore = totalScore + characters[0];
    addNumberForEach();
})

$("#maul").on("click", function() {
    totalScore = totalScore + characters[1];
    addNumberForEach();
})

$("#vader").on("click", function() {
    totalScore = totalScore + characters[2];
    addNumberForEach();
})

$("#han").on("click", function() {
    totalScore = totalScore + characters[3];
    addNumberForEach();
})

//Reset button
$(".btn").on("click", function() {
    totalScore = 0;
    losses = 0;
    wins = 0;
    randomStartNumber();
    $("#yourScore").text(totalScore);
    $("#randomNumber").text(randomStart);
    $("#wins").text(wins);
    $("#losses").text(losses);
})

//Initiate
function initGame() { 
   randomStartNumber(); 
   addNumberForEach();
   randomImageNumber();
};

initGame();


