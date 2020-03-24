$(document).ready(function(){

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
  ]

   // functions to handle the building questions page and scoring
  var trivia = {
  
    // pull questions from the array of questions, loop through them, and append to UI
    displayQuestions: function() {
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");
      divContainer.append('<h2>Answer the following questions:</h2>');
              
      for (var i = 0; i < questionBank.length; i++) {
  
        // Display the questions to the users screen
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
        // Declare vars for each one of the possibe answers
        var answer1 = questionBank[i].answers[0];
        var answer2 = questionBank[i].answers[1];
        var answer3 = questionBank[i].answers[2];
        var answer4 = questionBank[i].answers[3];
  
        // Show the answers as radio buttons
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
      }
  
      // Done Button for when the user finishes before the time is up 
      var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameState.stopTimer);
    },
  
   
 