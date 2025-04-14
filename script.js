document.addEventListener("DOMContentLoaded", () => {
  fetch('questions.json')
    .then(response => response.json())
    .then(questions => {
      document.getElementById('question-container').innerText = questions[0].question;
    })
    .catch(err => console.error("Error loading questions:", err));
});