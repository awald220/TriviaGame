// # Word-Guess-Game

// 1. the user sees the questions 
// 2. when the user presses any key the timer begins to count down
// 3. the user goes throught the questions and answers them 
// 4. when the timer goes off the results page pops up
// 6. the user sees how many questions they got correct/incorrect
// 7. the game is over at this point it does not reset



var correct = 0;
var incorrect = 0;

var questionsAnswers =[
    {
        question: "What was the name of Ross's pet monkey?",
        choiceA: "Marcel",
        choiceB: "George",
        choiceC: "Marty",
        choiceD: "King Kong",
        correct: "A"
    },
    {
        question: "Which character has a twin sister?",
        choiceA: "Rachel",
        choiceB: "Joey",
        choiceC: "Monica",
        choiceD: "Phoebe",
        correct: "D"
    },
    {
        question: "What is the name of the coffe shop that the group hangs out at?",
        choiceA: "Beyond the Daily Grind",
        choiceB: "Central Perk",
        choiceC: "Java Joes",
        choiceD: "Starbucks",
        correct: "B"
    },
    {
        question: "What is the name of Ross and Monica's father?",
        choiceA: "Carl",
        choiceB: "Richard",
        choiceC: "Jack",
        choiceD: "Frank",
        correct: "C"
    },
]