let points = 0; 
let pages = 1; 

function onload() {
    loadPointBase();
    loadPages();
}

function answer(i) {
    if (i == true) {
        points = points + 5;
        let index = document.getElementById('trueAnswer');+
        index.classList.add('text-bg-success');
        loadPointBase();
    }
    if (i == 0) {
        let wrong = document.getElementById('wrong1');
        wrong.classList.add('text-bg-danger');
        let index = document.getElementById('trueAnswer');+
        index.classList.add('text-bg-success');
    }
}

function loadPointBase(){
    let pointBase = document.getElementById('pointBase');
    pointBase.innerHTML = ``;
    pointBase.innerHTML += `${points} von 25 Punkte`
}

function loadPages() {
    let pagesPoint = document.getElementById('pages');
    pagesPoint.innerHTML = ``;
    pagesPoint.innerHTML = `<b>${pages}</b> von <b>5</b>`
}