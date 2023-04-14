"use strict";

let name = prompt("What's your name?");

alert(
  `Hello, ${name}! Welcome to my website. Let's play a guessing about me before you get to know me. Answer these questions with yes or no responses.`
);
console.log(`User's name is ${name}`);

let answer1 = prompt("Do I live in Tennessee?").toLowerCase();
if (answer1 === "yes" || answer1 === "y") {
  alert("You are right! I live in Murfreesboro, Tennessee");
} else {
  alert("Sorry, that is incorrect. I do live in Tennessee.");
}

let answer2 = prompt("Have I attended college?").toUpperCase();
if (answer2 === "YES" || answer2 === "Y") {
  alert("Correct! I attended Motlow State Community College.");
} else {
  alert("Incorrect. I have attended college.");
}

let answer3 = prompt("Have I worked in the restaurant industry?").toLowerCase();
if (answer3 === "no" || answer3 === "n") {
  alert(
    "I am sorry, that is incorrect. I own a family restaurant in Murfreesboro, Tennessee."
  );
} else {
  alert(
    "Yes, you are correct! I own a family restaurant located in Murfreesboro, Tennessee."
  );
}

let answer4 = prompt(
  "Do I plan on continuing in the restaurant industry?"
).toUpperCase();
if (answer4 === "no" || answer4 === "n") {
  alert("Correct! I plan on expanding my future career into coding.");
} else {
  alert(
    "That is incorrect. I actually plan on expanding my future career into coding."
  );
}

let answer5 = prompt(
  "Am I taking courses at Code X Academy to become a Full-Stack Engineer?"
).toLowerCase();
if (answer5 === "yes" || answer5 === "y") {
  alert(
    "Yes! I am currently enrolled with Code X Academy to become a Full-Stack Engineer."
  );
} else {
  alert(
    "That is incorrect. I am currently enrolled with Code X Academy to become a Full-Stack Engineer."
  );
}

if (answer1 === "yes" || answer1 === "y") {
  console.log("User got question 1 correct");
} else {
  console.log("User got question 1 wrong");
}

if (answer2 === "yes" || answer1 === "y") {
  console.log("User got question 2 correct");
} else {
  console.log("User got question 2 wrong");
}

if (answer3 === "yes" || answer1 === "y") {
  console.log("User got question 3 correct");
} else {
  console.log("User got question 3 wrong");
}

if (answer4 === "no" || answer4 === "n") {
  console.log("User got question 4 correct");
} else {
  console.log("User got question 4 wrong");
}

if (answer5 === "yes" || answer1 === "y") {
  console.log("User got question 5 correct");
} else {
  console.log("User got question 5 wrong");
}

alert(
  `Thanks for getting to know me, ${name}! Read my page for detailed information about me.`
);
