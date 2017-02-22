var ENTER_KEY = 13;

start();
var isActive = true;
var isShowingAnswer = false;

function start() {
  hideChecker();
  populateNext();
  
  $("#exponent-answer").keypress(function (e) {
    if (isActive) {
      if (isShowingAnswer && e.which == ENTER_KEY) {
        reset();
      }
      else {
        checkAndProceed(e);
      }    
    }
  });
  
  setInterval(function(){ $("#exponent-answer").focus() }, 1000);
}

function checkAndProceed(e) {
  var hasAnswer = $("#exponent-answer").val() !== "";

  var key = e.which;
  if(key == ENTER_KEY && hasAnswer)  // the enter key code
  {    
    checkAnswer();
  }
}

function checkAnswer() {
  var correctText = $("#result").text();
  var correct = parseInt(correctText);
  
  var answerText = $("#exponent-answer").val();
  var answer = parseInt(answerText);
  
  console.log("correct = " + correct);
  console.log("answer = " + Math.pow(2, answer));
  
  var isCorrect = Math.pow(2, answer) === correct;
  
  showChecker(isCorrect);
  isShowingAnswer = true;
  
  var shortTime = 1500;
  var longTime = 3000;
  var timeout = isCorrect ? shortTime : longTime;
  isActive = isCorrect;
  
  setTimeout(function() {
    if (isShowingAnswer) {
      reset();
    }
  }, timeout);
}

function reset() {
  hideChecker();
  clearAnswer();
  populateNext();
  isActive = true;
  isShowingAnswer = false;
}

function hideChecker() {
  $(".checkmark").hide();
  $(".correction").hide();
}

function showChecker(isCorrect) {
  if (isCorrect)
    $(".checkmark").show();
  else
    $(".correction").show();
}

function clearAnswer() {
  $("#exponent-answer").val("");
}

function populateNext() {
  var base = 2;
  
  var expMin = 0;
  var expMax = 14;
  var exponent = getRandomInt(expMin, expMax);
  var answer = Math.pow(base, exponent);

  if (answer != $("#result").text()) {
    $("#base").text(base);
    $(".correction").text(exponent);
    $("#result").text(answer);
  }
  else {
    populateNext();
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
