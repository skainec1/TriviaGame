$(document).ready(function() { 
    
 

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 0;
var questioni = 0;
let trivia = [
    {
        question: "What is the answer to this question?",
        options: ["idk", "this", "42", "gg"],
        answer: "this"
    },
    {
        question: "what is question 2?",
        options: ["idk", "this", "42", "gg"],
        answer: "idk"
    },
    {
        question: "what is question 2?",
        options: ["idk", "this", "42", "gg"],
        answer: "42"
    },
    {
        question: "what is question 2?",
        options: ["idk", "this", "42", "gg"],
        answer: "42"
    }
];
var question = trivia[questioni].question;
var options = trivia[questioni].options;
console.log(options);
var answer = trivia[questioni].answer;

function triviaQ() {
    // $("#start").hide();

    $("#question").html(question);

triviaO()

};
function triviaO() {
   
    for (var i = 0; i < 4; i++) { 
        var buttons = $('<button>'+ options[i] + '</button>') 
        buttons.addClass("buttons").appendTo('#answers'); 
        
    }
     
};


$(document).on("click", ".buttons", function () {
    userGuess = $(this).text();
    console.log(userGuess);    
    
    if (userGuess == answer) {
        correct++;
        $("#question").remove();
        $("#answers").remove();
        questioni++;
        triviaQ();
    }
    else if (userGuess !== answer) {
        incorrect++;
        $("#question").remove();
        $("#answers").remove();
        questioni++;
        triviaQ();
    }
    
    console.log("correct: " + correct);
    console.log("index " + questioni);
   triviaQ();
});



$("#start").click(triviaQ);

});