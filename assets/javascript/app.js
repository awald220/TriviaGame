// # Word-Guess-Game
// 0. users click start begin the game 
// 1. the user sees the questions 
// 2. when the user presses any key the timer begins to count down
// 3. the user goes through the questions and answers them 
// 4. when the timer goes off the results page pops up
// 6. the user sees how many questions they got correct/incorrect
// 7. the game is over at this point it does not reset



// Create an array with an object full of questions.
var myQuestions = [
    {
        question: "What was the name of Ross's pet monkey?",
        answers:[
            "Marcel", 
            "George",
            "King Kong",
            "Malik"
        ],
        correctAnswer: "Marcel"
    },

    {
        question: "Which character has a twin sister?",

            answers:[
                "Joey",
                "Phoebe",
                "Rachel",
                "Chandler"
            ],
        correctAnswer: "Phoebe"
    },


    {
        question: "What is the name of the coffe shop that the group hangs out at?",
        answers:[
            "Java Joe's",
            "Central Perk",
            "Starbucks",
            "Beyond the Daily Grind"
        ],
        correctAnswer: "Central Perk"
    },

    {
        question: "What is the name of Ross and Monica's father?",
        answers:[
            "Richard",
            "Marcus",
            "Jack",
            "Frank"
        ],
        correctAnswer: "Jack"
    }
]
   console.log(myQuestions.length);
   $("#questionContainer").hide()

    $("#buttonContainer").on("click", function(){
        console.log("hello")

        $("#buttonContainer").hide()
        $("#questionContainer").show()
        startGame()
    })

    function startGame(){
       // Create interval timer
   var timeLimit = 60;

   var myTimer = setInterval(intervalAction, 1000);
   
   function intervalAction() {
       document.getElementById("timer").innerHTML = timeLimit;
       if (timeLimit === 0) {
           document.getElementById("timer").innerHTML = "Time is up!";
           clearInterval(myTimer);
       }
       timeLimit--;
   }

  }

    for (var i = 0; i < myQuestions.length; i++) {
        console.log(myQuestions[i].question)
      var newQuestionBlock =  $("<div>")
      newQuestionBlock.addClass("questionBlock")
      var currentQuestionText = $("<p>")
      currentQuestionText.text(myQuestions[i].question)
      newQuestionBlock.append(currentQuestionText)
     

     for (var j = 0; j < myQuestions.length; j++) {
         console.log(myQuestions[j].answers)
         var newAnswerBlock = $("<div>")
         newAnswerBlock.addClass("answerBlock")
         var currentAnswerText = $("<p>")
         currentAnswerText.text(myQuestions[j].answers)    
         newAnswerBlock.append(newQuestionBlock)     
     }

     $("#questionDisplay").append(newQuestionBlock)
    }



    // needs to appends answerBlock to questionBlock but essencially do the same thing 
//     <div class="questionBlock">
//     <p>what is color is the sun?</p>
  
//     <input type="radio" id="answer1"
//     name="question1" value="yellow">
//    <label for="contactChoice1">yellow</label>

//    <input type="radio" id="answer2"
//       name="question1" value="green">
//     <label for="contactChoice1">green</label>
// </div>