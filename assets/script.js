var h1 = document.querySelector("h1")
var choicesEl = document.getElementById('choices')
var startBtn = document.querySelector('button')
var index = 0
var timer = 50
var timerEl = document.getElementById('timer')
function generateQuiz(questions, quizContainer, resultContainer, submitButton){
    function showQuestion(questions, quizContainer){
        //code will go here
    }
    function showResults(questions, quizContainer, resultContainer){
        //code will go here
    } //show the questions
    showQuestion(questions, quizContainer);
    //when user clicks submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultContainer);
    }
}