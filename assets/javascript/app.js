// # Word-Guess-Game

// 1. the user sees the questions 
// 2. when the user presses any key the timer begins to count down
// 3. the user goes throught the questions and answers them 
// 4. when the timer goes off the results page pops up
// 6. the user sees how many questions they got correct/incorrect
// 7. the game is over at this point it does not reset



// Create an array with an object full of questions.
var question1 =
    {
        question: "What was the name of Ross's pet monkey?",
        choiceA: "Marcel ",
        choiceB: "George ",
        choiceC: "Marty ",
        choiceD: "King Kong ",
        correct: "A"
    };

var question2 =
    {
        question: "Which character has a twin sister?",
        choiceA: "Rachel ",
        choiceB: "Joey ",
        choiceC: "Monica ",
        choiceD: "Phoebe ",
        correct: "D"
    };

var question3 =
    {
        question: "What is the name of the coffe shop that the group hangs out at?",
        choiceA: "Beyond the Daily Grind ",
        choiceB: "Central Perk ",
        choiceC: "Java Joes ",
        choiceD: "Starbucks ",
        correct: "B"
    };

var question4 = 
    {
        question: "What is the name of Ross and Monica's father?",
        choiceA: "Carl ",
        choiceB: "Richard ",
        choiceC: "Jack ",
        choiceD: "Frank ",
        correct: "C"
    };

   console.log(question1.question);
   
   // Display questions and options to users screen
   document.getElementById("question1").innerHTML = question1.question;
   document.getElementById("choices1").innerHTML = question1.choiceA + question1.choiceB + question1.choiceC + question1.choiceD;

   document.getElementById("question2").innerHTML = question2.question;
   document.getElementById("choices2").innerHTML = question2.choiceA + question2.choiceB + question2.choiceC + question2.choiceD;

   document.getElementById("question3").innerHTML = question3.question;
   document.getElementById("choices3").innerHTML = question3.choiceA + question3.choiceB + question3.choiceC + question3.choiceD;

   document.getElementById("question4").innerHTML = question4.question;
   document.getElementById("choices4").innerHTML = question4.choiceA + question4.choiceB + question4.choiceC + question4.choiceD;
   

