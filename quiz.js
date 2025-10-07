function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const feedback = document.getElementById("feedback")

        if (userAnswer == correctAnswer) {
            feedback.style.color = "green"
            feedback.textContent = "Correct! Well done."
        } else {
            feedback.style.color = "red"
            feedback.textContent = "That's incorrect. Try again!"
        }
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer)