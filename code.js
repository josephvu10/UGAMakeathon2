
var waterDonated = 0;

//Runs once at the beginning
function setup() {
  var googleSheetLink = "Water.csv";
  trivia.loadGoogleSheet(googleSheetLink).then(displayWelcome); 
}

//Loops continously for background effects and animations. (p5.js)
function draw() {
  if (trivia.state == "welcome");
  else if (trivia.state == "question") background("lightblue");
  else if (trivia.state == "correct") background("green");
  else if (trivia.state == "incorrect") background("red");
  else if (trivia.state == "thankyou") background("yellow");
}

function displayWelcome() {
  $(".screen").hide();
  $("#welcome-screen").show();
  $("#water-donated").text(`Liters of Water Donated: ${waterDonated}`); // Display number of liters of water donated
}

function displayQuestion() {
  $(".screen").hide();
  $("#question-screen").show();
  $("#correctAnswer").removeClass("highlight");
  $("#feedback").hide();
  trivia.insertQuestionInfo();
  trivia.shuffleAnswers();
}

function displayThankyou() {
  $(".screen").hide();
  $("#thankyou-screen").show();
  $("#game-results").html(`You got ${trivia.totalCorrect} of ${trivia.totalAnswered} correct.`);
  $("#water-donated").text(`Liters of Water Donated: ${waterDonated}`); // Display number of liters of water donated
}

function onClickedAnswer(isCorrect) {
  if (isCorrect) {
    $("#feedback").html(`Way to go!`).show();
    waterDonated++; // Increment gamesWon variable when the answer is correct
  } else {
    $("#feedback").html(`Better luck next time.`).show();
  }
  $("#correctAnswer").addClass("highlight"); // Highlight right answer
  setTimeout(trivia.gotoNextQuestion, 3000); // Wait 3 secs...next question
}


function onClickedStart() {
  displayQuestion();
}

function displayHelp() {
  $(".screen").hide();
  $("#help-screen").show();
}

