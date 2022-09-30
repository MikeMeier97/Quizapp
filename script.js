let points = 0;
let currentQuestion = 0;
let localQuestionBlock = 0;
let AUDIOsuccess = new Audio("audio/Success.mp3");
let AUDIOfail = new Audio("audio/Fail.mp3");

function onload() {
  showQuestion();
  loadPointBase();
  loadPages();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    showEndScreen();
  } else {
    showQuestions();
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let answerNumber = selection.slice(-1);
  if (localQuestionBlock < 1) {
    if (answerNumber == question["right_answer"]) {
      rightanswer(selection);
    } else {
      falseAnswer(selection, question);
    }
    document.getElementById("nextButton").disabled = false;
  }
}

function nextQuestion() {
  document.getElementById("nextButton").disabled = true;
  currentQuestion++;
  localQuestionBlock = 0;
  resetButtons();
  showQuestion();
  loadPages();
}

function loadPointBase() {
  document.getElementById("pointBase").innerHTML = `${points} von 25 Punkte`;
}

function loadPages() {
  document.getElementById("pagesCurrently").innerHTML = `${
    currentQuestion + 1
  }`;
  document.getElementById("pagesAll").innerHTML = `${questions.length}`;
}

function addPoints() {
  if (points <= 20) {
    points = points + 5;
    loadPointBase();
  }
}

function rightanswer(selection) {
  document.getElementById(selection).parentNode.classList.add("bg-success");
  AUDIOsuccess.play();
  localQuestionBlock++;
  addPoints();
}

function falseAnswer(selection, question) {
  let theRightAnswer = "answer" + question["right_answer"];
  document
    .getElementById(theRightAnswer)
    .parentNode.classList.add("bg-success");
  document.getElementById(selection).parentNode.classList.add("bg-danger");
  AUDIOfail.play();
  localQuestionBlock++;
}

function progessBar() {
  let percent = currentQuestion / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
}

function showQuestions() {
  let question = questions[currentQuestion];
  document.getElementById("questionTitle").innerHTML = question["question"];
  document.getElementById("answer1").innerHTML = question["answer1"];
  document.getElementById("answer2").innerHTML = question["answer2"];
  document.getElementById("answer3").innerHTML = question["answer3"];
  document.getElementById("answer4").innerHTML = question["answer4"];
  progessBar();
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionContent").style = "display: none;";
  document.getElementById("progress-bar").style = `width: 100%;`;
  document.getElementById("pointsEndscreen").innerHTML = `${points}`;
  setTimeout(function () {
    //Reload Timer
    window.location.reload();
  }, 10000);
}

function resetButtons() {
  document.getElementById("answer1").parentNode.classList.remove("bg-success");
  document.getElementById("answer1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer2").parentNode.classList.remove("bg-success");
  document.getElementById("answer2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer3").parentNode.classList.remove("bg-success");
  document.getElementById("answer3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer4").parentNode.classList.remove("bg-success");
  document.getElementById("answer4").parentNode.classList.remove("bg-danger");
}

let questions = [
  {
    question: "Wie alt bin ich?",
    answer1: "16",
    answer2: "22",
    answer3: "25",
    answer4: "18",
    right_answer: 3,
  },
  {
    question: "Als was arbeite ich aktuell?",
    answer1: "Weichenwärter",
    answer2: "Lokführer",
    answer3: "Tranzportleitung",
    answer4: "Fahrdienstleiter",
    right_answer: 4,
  },
  {
    question: "Was esse ich am liebsten?",
    answer1: "Pizza",
    answer2: "Gemüße",
    answer3: "Sushi",
    answer4: "Burger",
    right_answer: 1,
  },
  {
    question: "Wie groß bin ich?",
    answer1: "1,72",
    answer2: "1,69",
    answer3: "1,78",
    answer4: "1,82",
    right_answer: 4,
  },
  {
    question: "Was ist mein Hobby?",
    answer1: "Atmen",
    answer2: "Zocken",
    answer3: "Programmieren",
    answer4: "Arbeiten",
    right_answer: 3,
  },
];
