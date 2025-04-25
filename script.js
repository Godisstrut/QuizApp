let triviaQuestions = [];

async function FetchApiCall() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");
        const data = await response.json();
        triviaQuestions = data.results;
        console.log(data);
        const question = data.results[0];
        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        DisplayQuestion(question, allAnswers);
    } catch (err) {
        console.error("Failed to fetch data from API", err)
    }
}

async function FetchBooleanQuestion() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean");
        const data = await response.json();
        triviaQuestions = data.results;
        const question = data.results[0];
        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        console.log(data);
        DisplayQuestion(question, allAnswers);
    } catch (err) {
        console.error("Failed to fetch true or false questions", err)
    }
}

function DisplayQuestion(question, allAnswers) {
    document.getElementById("questions").textContent = question.question

    const answers = document.getElementById("answers");
    answers.innerHTML = "";

    allAnswers.forEach(answer => {
        const answerBtn = document.createElement("button");
        answerBtn.textContent = answer;
        answers.appendChild(answerBtn);
    })
}

FetchBooleanQuestion();