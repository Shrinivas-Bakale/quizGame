const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");
const nameOfContestant = document.querySelector(".name-input");
const nameOfContestantDisplay = document.querySelector(".name-output");
const startText = document.querySelector(".start-text");

startBtn.onclick = () => {
  if (nameOfContestant.value != "") {
    popupInfo.classList.add("active");
    main.classList.add("active");
  } else {
    startText.textContent = "Please Enter Your Name";
  }
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  showQuestions(0);
  questionCounter(1);
  // headerScore()
  startTimer(0.2 * 60); // 50 minutes in seconds
};

function startTimer(duration) {
  const timerDiv = document.querySelector(".timer-div"); // Add a div with the class timer-div in your HTML
  let timeRemaining = duration;

  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // Update the timer display
    timerDiv.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      requestPassword();
    }
    timeRemaining--;
  }, 1000); // Update every second
}

const resultPassword = "klebca@69";

function requestPassword() {
  const userPassword = prompt("Enter the password to view your results:");
  if (userPassword === resultPassword) {
    showResultBox();
  } else {
    alert("Incorrect password. You cannot view the results.");
    requestPassword();
  }
}

// tryAgainBtn.onclick = () => {
//   quizBox.classList.add("active");
//   resultBox.classList.remove("active");
//   nextBtn.classList.remove("active");

//   questionCount = 0;
//   questionNumb = 1;
//   userScore = 0;
//   showQuestions(questionCount);
//   questionCounter(questionNumb);

//   // headerScore()
// };
goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  resultBox.classList.remove("active");
  nextBtn.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove("active");
  } else {
    showResultBox();
  }
};

const optionList = document.querySelector(".option-list");

// getting questions and options from array
// function showQuestions(index) {
//   const questionText = document.querySelector(".question-text");
//   questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

//   let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
//         <div class="option"><span>${questions[index].options[1]}</span></div>
//         <div class="option"><span>${questions[index].options[2]}</span></div>
//         <div class="option"><span>${questions[index].options[3]}</span></div>`;

//   optionList.innerHTML = optionTag;

//   const option = document.querySelectorAll(".option");
//   for (let i = 0; i < option.length; i++) {
//     option[i].setAttribute("onclick", "optionSelected(this)");
//   }
// }

// function optionSelected(answer) {
//   let userAnswer = answer.textContent;
//   let correctAnswer = questions[questionCount].answer;
//   let allOptions = optionList.children.length;

//   if (userAnswer == correctAnswer) {
//     console.log("correct");
//     answer.classList.add("correct");
//     userScore++;
//     // headerScore()
//   } else {
//     answer.classList.add("incorrect");

//     //if answer is incorrect, auto select correct option
//     for (let i = 0; i < allOptions; i++) {
//       if (optionList.children[i].textContent == correctAnswer) {
//         optionList.children[i].setAttribute("class", "option correct");
//       }
//     }
//   }
//   //   After user has selected, disable all option
//   for (let i = 0; i < allOptions; i++) {
//     optionList.children[i].classList.add("disabled");
//   }

//   nextBtn.classList.add("active");
// }

let selectedAnswer = null; // To track the user's selected answer

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  // Generate options as radio buttons
  let optionTag = `
    <label class="option"><input type="radio" name="answer" value="${questions[index].options[0]}"> ${questions[index].options[0]}</label>
    <label class="option"><input type="radio" name="answer" value="${questions[index].options[1]}"> ${questions[index].options[1]}</label>
    <label class="option"><input type="radio" name="answer" value="${questions[index].options[2]}"> ${questions[index].options[2]}</label>
    <label class="option"><input type="radio" name="answer" value="${questions[index].options[3]}"> ${questions[index].options[3]}</label>
  `;

  optionList.innerHTML = optionTag;

  // Enable the Submit button only when an option is selected
  const radios = document.querySelectorAll('input[name="answer"]');
  radios.forEach((radio) => {
    radio.onclick = () => {
      selectedAnswer = radio.value;
      document.getElementById("submitBtn").disabled = false;
    };
  });

  // Disable Next button until after submission
  nextBtn.classList.remove("active");
}

function submitAnswer() {
  if (!selectedAnswer) return; // Do nothing if no answer is selected

  const correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  // Evaluate the selected answer
  if (selectedAnswer === correctAnswer) {
    userScore++;
    console.log("correct");
  } else {
    console.log("incorrect");

    // Highlight the correct answer
    // for (let i = 0; i < allOptions; i++) {
    //   if (optionList.children[i].textContent.includes(correctAnswer)) {
    //     optionList.children[i].classList.add("correct");
    //   }
    // }
  }

  // Disable all options after submission
  const radios = document.querySelectorAll('input[name="answer"]');
  radios.forEach((radio) => (radio.disabled = true));

  // Enable the Next button after submission
  nextBtn.classList.add("active");
  document.getElementById("submitBtn").disabled = true; // Disable the Submit button
}

function nextQuestion() {
  questionCount++;
  if (questionCount < questions.length) {
    showQuestions(questionCount);
  } else {
    showResult(); // Implement this function to show final results
  }
  selectedAnswer = null;
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

// function headerScore() {
//   const headerScoreText = document.querySelector(".header-score");
//   headerScoreText.textContent = ``;
// }

function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  nameOfContestantDisplay.textContent = nameOfContestant.value;

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

  // const circularProgress = document.querySelector(".circular-progress");
  // const progressValue = document.querySelector(".progress-value");
  // let progressStartValue = -1;
  // let progressEndValue = (userScore / questions.length) * 100;
  // let speed = 20;

  // let progress = setInterval(() => {
  //   progressStartValue++;
  //   progressValue.textContent = `${progressStartValue}%`;
  //   circularProgress.style.background = `conic-gradient(#AA2C86 ${
  //     progressStartValue * 3.6
  //   }deg, rgba(255, 255, 255, .1) 0deg)`;
  //   if (progressStartValue == progressEndValue) {
  //     clearInterval(progress);
  //   }
  // }, speed);
}
