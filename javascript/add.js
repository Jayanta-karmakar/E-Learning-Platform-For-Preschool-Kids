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

  answer = eval(num1 + num2);

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

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
  console.log(score);

}

function subtractscore() {
  score -= 1;
  document.getElementById('current_score').textContent = score;
  try_again.classList.remove('hidden');
  console.log(score);
}
console.log(score);

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

/* // Open the IndexedDB database
const dbRequest = window.indexedDB.open('myDatabase', 1);

// Define the object store schema
dbRequest.onupgradeneeded = event => {
  const db = event.target.result;
  const objectStore = db.createObjectStore('scores', { keyPath: 'id', autoIncrement: true });
  objectStore.createIndex('score', 'score', { unique: false });
};

// Retrieve the scores from the web page and add them to the database
dbRequest.onsuccess = event => {
  const db = event.target.result;
  const transaction = db.transaction(['scores'], 'readwrite');
  const objectStore = transaction.objectStore('scores');

  // Retrieve the scores from the web page and add them to the database
  const scores = document.querySelectorAll('.score');
  scores.forEach(score => {
    const value = parseInt(score.innerText);
    objectStore.add({ score: value });
  });

  transaction.oncomplete = () => {
    console.log('Scores added to database.');
  };
};
*/

