     // array of objects with the questions, possible answers, and the correct answer
  var questionBank =
  [
    {
      question: "What is the name of Ross's pet monkey?",
      answers: ["Marcel", "Jack", "Gerorge", "King Kong"],
      correct: "Marcel"
    },
  
    {
      question: "Which character has a twin sister?",
      answers: ["Rachel", "Joey", "Phoebe", "Chandler"],
      correct: "Phoebe"
    },
    {
      question: "What is the name of Ross and Monica's Father?",
      answers: ["Frank", "Jack", "Richard", "Joe"],
      correct: "Jack"
    },
    {
      question: "What is the name of the coffee shop?",
      answers: ["Central Perk", "Java Joe's", "Starbucks", "Beyond the Daily Grind"],
      correct: "Central Perk"
    },
    {
      question: "How many times has Ross been married?",
      answers: ["1", "2", "3", "4"],
      correct: "3"
    },
    {
      question: "What is Phoebe's most popular song?",
      answers: ["Sticky Shoes", "Smelly Cat", "The Cow in the Meadow", "Parading Goats"],
      correct: "Smelly Cat"
    },

    {
      question: "Who's catchphrase is 'How you doin'?",
      answers: ["Chandler", "Ross", "Phoebe", "Joey"],
      correct: "Joey"
    },
    {
      question: "What is Chandler's middle name?",
      answers: ["Matthew", "Carry", "Muriel", "Robin"],
      correct: "Muriel"
    },
    {
      question: "What is Monica's job?",
      answers: ["Chef", "Waitress", "Chiropractor", "Teacher"],
      correct: "Chef"
    },
    {
      question: "Who is Gunther in love with?",
      answers: ["Monica", "Ross", "Phoebe", "Rachel"],
      correct: "Rachel"
    },
  ];


  $(document).ready(function(){

    $("#timer").hide()
    
    // start the game when user clicks on Start button
    $("#start-button").on("click", gameState.startTimer);
    
  });
  
  // information about the state of game play
  var gameState = {
   
    // set the time at 60 seconds, and count down by 1 second
    timeRemaining : 60,
  
    // start the timer, hide the start page, show the questions
    startTimer: function() {
      $("#timer").show()
      $("#timer").text(gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },
  
    // decrement the timer and update the UI; stop the timer at 0
    countdown: function() {
      gameState.timeRemaining--;
      $("#timer").text(gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
      }
    },
  
    // stop the timer and check the answers
    stopTimer: function() {
      clearInterval();
      trivia.checkAnswers();
    },
  
    // hide the quetions and display the end page with results
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#end-page").show();
      $("#questions-box").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("Correct answers: " + numCorrect);
      $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
      $("#unanswered").text("Skipped questions: " + numUnanswered);
    }
  }
  
  // functions to handle the building questions page and scoring
  var trivia = {
  
    // pull questions from the array of questions, loop through them, and append to UI
    displayQuestions: function() {
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");
      divContainer.append('<h2>How well do you know Friends?</h2>');
              
      for (var i = 0; i < questionBank.length; i++) {
  
        // send questions to users screen
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
        // Declare vars for possible answers
        var answer1 = questionBank[i].answers[0];
        var answer2 = questionBank[i].answers[1];
        var answer3 = questionBank[i].answers[2];
        var answer4 = questionBank[i].answers[3];

        // Make answers radio buttons
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
    
      }
  
      // add a Done button to the end of the page and register its click handler
      var doneButton = '<button id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameState.stopTimer);
    },
  
    // test if the user answers are correct, incorrect, or if there are unanswered questions
    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;
  
      // loop through to compare the text of the label with the user answers
      // increment score counts appropriately
      for (var i = 0; i < questionBank.length; i++) {
        correctAnswer = questionBank[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  
      // show the end page with the score tally
      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },
  }


  
