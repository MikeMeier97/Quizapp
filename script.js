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
let pages = 1; 

function onload() {
    init();
    loadFirstQuestions();
    loadPointBase();
    loadPages();
    
}

function init() {

}

function answer(i) {
    
}

function loadPointBase(){
    let pointBase = document.getElementById('pointBase');
    pointBase.innerHTML = ``;
    pointBase.innerHTML += `${points} von 25 Punkte`
}


function loadPages() {
    let pagesCurrently = document.getElementById('pagesCurrently');
    let pagesAll = document.getElementById('pagesAll');
    pagesCurrently.innerHTML = `${pages}`;
    pagesAll.innerHTML = `${questions.length}`;
}

