//Variables 

var wins = 0;
var losses = 0;
var totalScore = 0;
var characters = [yoda, vader, maul, han];
var randomNumber = randomNumber

//Reset Game and create a new Random Number

function reset() {
    totalScore = 0
    random()
}

//Generating a Random Number

function random() {
    for(var i = 0; i < characters.length; i++) 

//Adding to the DOM

function init() {
    $("#Wins").html(wins);
    $("#Losses").html(losses);
    $("#Total Score").html(totalScore);
    $("#Random #").html(randomNumber);
}

//Hitting the exact number or going over

function score() {
    if(totalScore === randomNumber) {
        wins++;
        alert("The Force is Strong with this One!!!")
    }else if(totalScore > randomNumber) {
        losses++;
        alert("You have failed me for the last time!!!")
    }
}


//Image click events

$("#yoda").on("click", function() {
})

$("#maul").on("click", function() {
})

$("#vader").on("click", function() {
})

$("#han").on("click", function() {
})
