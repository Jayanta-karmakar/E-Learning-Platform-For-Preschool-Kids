const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answer-indicator"); 
const homeBox  = document.querySelector(".home-box");
const quizBox  = document.querySelector(".quiz-box");
const resultBox  = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswer = 0;
let attempt = 0;

function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0;i<totalQuestion;i++){
        availableQuestions.push(quiz[i])
    }
}

function getNewQuestion()
{
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);
    const optionLen = currentQuestion.options.length
    for(let i=0;i<optionLen;i++){
        availableOptions.push(i)
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.2;
    for(let i=0;i<optionLen;i++)
    {
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex)
        availableOptions.splice(index2,1);
        console.log(optionIndex);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)")

    }
    //console.log(questionIndex)
    questionCounter++

}
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0;i<optionLen;i++){
        optionContainer.children.classList.add("already-answered");
    }
}
function getResult(element){
    const id = parseInt(element.id);
    if(id === currentQuestion.answer){
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswer++;
        console.log("Correct " + correctAnswer);
    }
    else{
        element.classList.add("Wrong");
        updateAnswerIndicator("Wrong");
        const optionLen = optionContainer.children;
        for(let i=0;i<optionLen;i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");  
            }
        }
    }
    attempt++;
    unclickableOptions();
}

function answersIndicator(){
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator)
    }
}
function updateAnswerIndicator(markType){
    answerIndicatorContainer.children[questionCounter-1].classList.add(markType)
}
function next(){
    if(questionCounter === quiz.length){
        console.log("Quiz Over");
        quizOver();
    }
    else{
        getNewQuestion();
    }
}

function quizOver(){
    //Hide quiz box
    quizBox.classList.add("hide");
    //Show Result box
    resultBox.classList.remove("hide");
    quizResult();
}
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswer;
    const percentage = (correctAnswer/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswer + " / " + quiz.length;
}
function resetQuiz(){
    questionCounter = 0;
    correctAnswer = 0;
    attempt = 0; 
}
function tryAgainQuiz(){
    //Hide the result box
    resultBox.classList.add("hide");
    //Show the quiz box
    quiz.classList.remove("hide");
    resetQuiz();
}

window.onload = function(){
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}


