function loadFirstQuestions() {
    let questionContent = document.getElementById('questionContent');
    questionContent.innerHTML += `
    <h3 class="mb-3">Wie alt bin ich?</h3> 
    <div class="card pointer" id="wrong1" style="margin-bottom: 10px;" onclick="answer(0)">
      <div class="card-body">
        16
      </div>
    </div>
    <div class="card pointer" id="wrong2" style="margin-bottom: 10px;" onclick="answer(1)">
      <div class="card-body">
        19
      </div>
    </div>
    <div class="card pointer" id="wrong3" style="margin-bottom: 10px;" onclick="answer(2)">
      <div class="card-body">
        23
      </div>
    </div>
    <div class="card pointer" id="trueAnswer" onclick="answer(true)">
      <div class="card-body">
        25
      </div>
    </div> 
    <footer class="pt-3 mb-0 pb-0 d-flex justify-content-between">
        <p class="mb-0 pb-0 pt-1" id="pages"></p>
        <p class="mb-0 pb-0 pt-1"><b id="pointBase"></b></p>
        <button type="button" class="btn btn-primary mb-0 pt-1">Nächste</button>
    </footer>
`; 
}

