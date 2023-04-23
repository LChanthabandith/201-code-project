"use strict";

let name = prompt("What's your name?");

alert(
  `Hello, ${name}! Welcome to my website. Let's play a guessing about me before you get to know me. Answer these questions with yes or no responses.`
);
console.log(`User's name is ${name}`);

// Keep track of correct answers
let correctAnswers = 0;

// Question 1
function question1() {

  let answer1 = prompt("Do I live in Tennessee?").toLowerCase();
  if (answer1 === "yes" || answer1 === "y") {
    alert("You are right! I live in Murfreesboro, Tennessee");
    console.log("User got question 1 correct");
    correctAnswers++;
  } else {
    console.log("User got question 1 wrong");
    alert("Sorry, that is incorrect. I do live in Tennessee.");
  }
}

// Question 2
function question2(){

  let answer2 = prompt("Have I attended college?").toLowerCase();
  if (answer2 === "yes" || answer2 === "y") {
    console.log("User got question 2 correct");
    alert("Correct! I attended Motlow State Community College.");
    correctAnswers++;
  } else {
    console.log("User got question 2 wrong");
    alert("Incorrect. I have attended college.");
  }
}

// Question 3
function question3(){
  
  let answer3 = prompt("Have I worked in the restaurant industry?").toLowerCase();
  if (answer3 === "yes" || answer3 === "y") {
    console.log("User got question 3 correct");
    alert(
      "Yes, you are correct! I own a family restaurant located in Murfreesboro, Tennessee."
    );
    correctAnswers++;
  } else {
    console.log("User got question 3 wrong");
    alert(
      "I am sorry, that is incorrect. I own a family restaurant in Murfreesboro, Tennessee."
    );
  }
}

// Question 4
function question4(){

  let answer4 = prompt(
    "Do I plan on continuing in the restaurant industry?"
  ).toLowerCase();
  if (answer4 === "no" || answer4 === "n") {
    console.log("User got question 4 correct");
    alert("Correct! I plan on expanding my future career into coding.");
    correctAnswers++;
  } else {
    console.log("User got question 4 wrong");
    alert(
      "That is incorrect. I actually plan on expanding my future career into coding."
    );
  }
}

// Question 5
function question5(){

  let answer5 = prompt(
    "Am I taking courses at Code X Academy to become a Full-Stack Engineer?"
  ).toLowerCase();
  if (answer5 === "yes" || answer5 === "y") {
    console.log("User got question 5 correct");
    alert(
      "Yes! I am currently enrolled with Code X Academy to become a Full-Stack Engineer."
    );
    correctAnswers++;
  } else {
    console.log("User got question 5 wrong");
    alert(
      "That is incorrect. I am currently enrolled with Code X Academy to become a Full-Stack Engineer."
    );
  }
}



// Question 6
function question6(){

  let answer6 = [5, 10, 15, 20];
  let attempts6 = 6;
  let userAnswer6 = parseInt(prompt("Guess a number between 1 and 25 that's divisible by 5:"));
  
  while (attempts6 > 0) {
    console.log("User's guess: " + answer6);
    let isCorrect = false;
    for (let i = 0; i < answer6.length; i++) {
      if (userAnswer6 === answer6[i]) {
        alert("Correct! The possible answers were: " + answer6[0] + ", " + answer6[1] + ", " + answer6[2] + ", " + answer6[3]);
        correctAnswers++;
        isCorrect = true;
        break;
      }
    }
    if (isCorrect) {
      break;
    } else {
      attempts6--;
      if (userAnswer6 > 20) {
        alert("Too high!");
      } else if (userAnswer6 < 5) {
        alert("Too low!");
      } else if (userAnswer6 % 5 !== 0) {
        alert("That's not divisible by 5!");
      } else {
        alert("Sorry, that's not one of the possible answers.");
      }
      if (attempts6 > 0) {
        userAnswer6 = parseInt(prompt("Guess again!"));
      }
    }
  }
  
  if (attempts6 === 0) {
    console.log("User is out of attempts.");
    alert("Sorry, you ran out of attempts. The possible answers were: " + answer6[0] + ", " + answer6[1] + ", " + answer6[2] + ", " + answer6[3]);
  } else {
    console.log("User guessed correctly.");
  }
}

// Question 7
function question7(){
// Array of possible answers for question 7
  let possibleAnswers = ["Paris", "New York", "Tokyo", "London", "Sydney", "Dubai"];
  let answer7;
  let answerCount = 6;
  let answered = false;
  
  while (answerCount > 0) {
    answer7 = prompt("Name a city with a famous landmark:");
    for (var i = 0; i < possibleAnswers.length; i++) {
      if (answer7.toLowerCase() === possibleAnswers[i].toLowerCase()) {
        alert("Correct!");
        correctAnswers++;
        answered = true;
        break;
      }
    }
    if (answered) {
      break;
    }
    alert("Incorrect. Guesses left: " + (answerCount - 1));
    answerCount--;
  }
  if (answerCount == 0) {
    alert("Out of guesses. Possible answers were: " + possibleAnswers.join(", "));
  }
  console.log("Question 7 - Name a city with a famous landmark:");
  console.log("Possible correct answers: " + possibleAnswers.join(", "));
  console.log("User's answer: " + answer7);
  console.log("User got it correct? " + answer7);
}

// call stack
question1()
question2()
question3()
question4()
question5()
alert(
  `Thanks for getting to know me, ${name}! Let's play a random guessing game before you read my page for detailed information about me.`
);
question6()
question7()

// Display total correct answers
alert("You got " + correctAnswers + " out of 7 correct.");