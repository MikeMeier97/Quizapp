let questions = [
{   "question": "Wie alt bin ich?",
    "answer1": "16",
    "answer2": "22",
    "answer3": "25",
    "answer4": "18",
    "right_answer": 3
},
{   "question": "Als was arbeite ich aktuell?",
    "answer1": "Weichenwärter",
    "answer2": "Lokführer",
    "answer3": "Tranzportleitung",
    "answer4": "Fahrdienstleiter",
    "right_answer": 4
},
{   "question": "Was esse ich am liebsten?",
    "answer1": "Pizza",
    "answer2": "Gemüße",
    "answer3": "Sushi",
    "answer4": "Burger",
    "right_answer": 1
},
{   "question": "Wie groß bin ich?",
    "answer1": "1,72",
    "answer2": "1,69",
    "answer3": "1,78",
    "answer4": "1,82",
    "right_answer": 4
},
{   "question": "Was ist mein Hobby?",
    "answer1": "Atmen",
    "answer2": "Zocken",
    "answer3": "Programmieren",
    "answer4": "Arbeiten",
    "right_answer": 3
}
];
let points = 0;  
let currentQuestion = 0;
let localQuestionBlock = 0;

function onload() {
    init();
    //save();
    showQuestion();
    loadPointBase();
    loadPages();
    
}
//function save() {
//    localStorage.setItem();
//}
/* function load() {
    localStorage.getItem();
}
*/

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionTitle').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function init() {
}
// arbeit ende. Versuch auf Array teil zuzugreifen.
function answer(selection) {
    let question = questions[currentQuestion];
    let theRightAnswer = 'answer' + question['right_answer'];
    let answerNumber = selection.slice(-1);
    if(localQuestionBlock < 1) {
        if(answerNumber == question['right_answer']) {
            document.getElementById(selection).classList.add('bg-success');
            localQuestionBlock++;
            addPoints();
        } else {
            document.getElementById(theRightAnswer).parentNode.classList.add('bg-success');
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            localQuestionBlock++;   
        }
        document.getElementById('nextButton').disabled = false; 
    }
}


function loadPointBase(){
    document.getElementById('pointBase').innerHTML = `${points} von 25 Punkte`
}


function loadPages() {
    document.getElementById('pagesCurrently').innerHTML = `${currentQuestion + 1}`;
    document.getElementById('pagesAll').innerHTML = `${questions.length}`;
}

function addPoints () {
    if(points <= 20) {
        points = points + 5;
        loadPointBase();
    }
}