const generateButton = document.getElementById("generate-button");
const reveal = document.getElementById("reveal-button");
const answerContainer = document.getElementById("answer-container");

generateButton.addEventListener("click", () => {
  getData();
  reveal.removeAttribute("hidden");
  answerContainer.setAttribute("hidden", "true");
})

reveal.addEventListener("click", () => {
  answerContainer.toggleAttribute("hidden");
})

async function getData() {
  const questionElem = document.getElementById("question");
  const answerElem = document.getElementById("answer");
  const response = await fetch("http://localhost/api/index.php");
  const data = await response.json();
  const index = randomInteger(0, (Object.keys(data.data[0]).length)-1);
  let jokeTrivia = data.data[0][`index${index}`];
  const arr = jokeTrivia.split("?");
  let question, answer;

  do {
    [question, answer] = arr;
    question += "?";
  } while (questionElem.text == question);

  questionElem.textContent = question;
  answerElem.textContent = answer;
}

function randomInteger(min, max) {
  return Math.trunc(min + (Math.random() * (max - min + 1)));
}