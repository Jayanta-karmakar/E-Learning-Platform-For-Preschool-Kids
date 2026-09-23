// create an array and add some questions and answes
// note: arrays are zero based. That means array [0] is the first one
var currentquestion = 0;
var questions = [{
    "question": "which one is Parrot?",
    "response": "Parrot",
    "answerimage": 'riimage001'
}, {
    "question": "Which one is Falcon?",
    "response": "Falcon",
    "answerimage": 'riimage003'
}, {
    "question": "Which is Hen?",
    "response": "Hen",
    "answerimage": 'riimage002'
},
{
    "question": "Which is Duck?",
    "response": "Duck",
    "answerimage": 'riimage008'
},
{
    "question": "Which is Owl?",
    "response": "Owl",
    "answerimage": 'riimage005'
},
{
    "question": "Which is Penguin?",
    "response": "Penguin",
    "answerimage": 'riimage006'
},
{
    "question": "Which is Hummingbird?",
    "response": "Hummingbird",
    "answerimage": 'riimage0010'
},
{
    "question": "Which is Peacock?",
    "response": "Peacock",
    "answerimage": 'riimage009'
},
{
    "question": "Which is Kingfisher?",
    "response": "Kingfisher",
    "answerimage": 'riimage004'
},
{
    "question": "Which one is Ostriches?",
    "response": "Ostriches",
    "answerimage": 'riimage007'
}];

(function () {
    // your page initialization code here
    fnReset(); //call reset on document ready

    document.getElementById("rinextquestion").addEventListener('click', function (event) {
        fnNext();
    });

    document.getElementById("riimage001").addEventListener('click', function (event) {
        fnCheck("riimage001", this);
    });
    document.getElementById("riimage002").addEventListener('click', function (event) {
        fnCheck("riimage002", this);
    });

    document.getElementById("riimage003").addEventListener('click', function (event) {
        fnCheck("riimage003", this);
    });
    document.getElementById("riimage004").addEventListener('click', function (event) {
        fnCheck("riimage004", this);
    });
    document.getElementById("riimage005").addEventListener('click', function (event) {
        fnCheck("riimage005", this);
    });
    document.getElementById("riimage006").addEventListener('click', function (event) {
        fnCheck("riimage006", this);
    });
    document.getElementById("riimage007").addEventListener('click', function (event) {
        fnCheck("riimage007", this);
    });
    document.getElementById("riimage008").addEventListener('click', function (event) {
        fnCheck("riimage008", this);
    });
    document.getElementById("riimage009").addEventListener('click', function (event) {
        fnCheck("riimage009", this);
    });
    document.getElementById("riimage0010").addEventListener('click', function (event) {
        fnCheck("riimage0010", this);
    });
    document.getElementById("rireset").addEventListener('click', function (event) {
        fnReset();
    });

})();

function fnReset() {
    document.getElementById('riquestionresponse').classList.add('rihide');
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('rireset').classList.add('rihide');
    document.getElementById('riquestionbox').classList.remove('rihide');
    currentquestion = 0;
    document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnNext() {
    document.getElementById('riquestionresponse').classList.add('rihide');
    if (currentquestion < questions.length - 1) {
        currentquestion = currentquestion + 1;
        document.getElementById('rinextquestion').classList.add('rihide');
        document.getElementById('rireset').classList.add('rihide');
    } else {
        document.getElementById('rinextquestion').classList.add('rihide');
        document.getElementById('riquestionbox').classList.add('rihide');
        document.getElementById('rireset').classList.remove('rihide');
    }
    document.getElementById('riquestionresponse').classList.add('rihide');
    document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnCheck(answerimage, obj) {
    document.getElementById('riquestionresponse').classList.remove('ricorrect');
    document.getElementById('riquestionresponse').classList.remove('riincorrect');
    if (questions[currentquestion].answerimage === answerimage) {
        // show correct
        document.getElementById('riquestionresponse').classList.add('ricorrect');
        document.getElementById('riquestionresponse').innerHTML = "Correct: The answer is '" + obj.name + "'. " + questions[currentquestion].response;
        document.getElementById('rinextquestion').classList.remove('rihide');
    } else {
        // show incorrect
        document.getElementById('riquestionresponse').classList.add('riincorrect');
        document.getElementById('riquestionresponse').innerHTML = "Incorrect: You chose: '" + obj.name + "''. Please try again.";
    }
    document.getElementById('riquestionresponse').classList.remove('rihide');
}
