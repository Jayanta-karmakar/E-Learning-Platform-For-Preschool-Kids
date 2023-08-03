const option1 = document.getElementById("option1"),
  option2 = document.getElementById("option2"),
  option3 = document.getElementById("option3"),
  audio = document.getElementById("myAudio");
var answer = 0;

const btn = document.querySelector('.btn');

const try_again = document.querySelector('.try_again')

function generate_equation() {
  var num1 = Math.floor(Math.random() * 13),
    num2 = Math.floor(Math.random() * 13),
    dummyAnswer1 = Math.floor(Math.random() * 10),
    dummyAnswer2 = Math.floor(Math.random() * 10),
    allAnswers = [],
    switchAnswers = [];

  if (num1 > num2) {
    answer = eval(num1 - num2);
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
  }
  else {
    answer = eval(num2 - num1);
    document.getElementById("num1").innerHTML = num2;
    document.getElementById("num2").innerHTML = num1;
  }

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--;) {
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];

};
var score = 0;
function addscore() {
  score += 5;
  document.getElementById('current_score').textContent = score;
  try_again.classList.add('hidden');
}
function subtractscore() {
  score -= 1;
  document.getElementById('current_score').textContent = score;
  try_again.classList.remove('hidden');
}

submit.addEventListener("click", function () {
  var popUpVal = document.getElementById('popup');
  popUpVal.style.visibility = "hidden";
  if (popUpVal.style.visibility === 'hidden') {
    document.getElementById("offer").innerHTML = `Score ${score}`
    popUpVal.style.visibility = "visible";
  }
});

popUpClose.addEventListener("click", function () {
  var popUpVal = document.getElementById('popup');
  if (popUpVal.style.visibility === 'visible') {
    popUpVal.style.visibility = "hidden";
  }
})
option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    addscore();
    generate_equation();
  }
  else {
    audio.play();
    subtractscore();
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    addscore();
    generate_equation();
  }
  else {
    audio.play();
    subtractscore();
  }
});

option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    addscore();
    generate_equation();
  }
  else {
    audio.play();
    subtractscore();
  }
});

btn.addEventListener('click', function () {
  document.getElementById('current_score').textContent = 0;
})
generate_equation()


