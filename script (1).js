
function checkAnswer(question, correctAnswer) {
  const answers = document.getElementsByName(question);
  let selected = null;
  for (const answer of answers) {
    if (answer.checked) {
      selected = answer.value;
      break;
    }
  }
  if (selected === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect. Try again!");
  }
}
