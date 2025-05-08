let triviaQuestions = [];
let quizStarted = false;
let questionType = "";

function SelectedQuestionType() {
    questionType = Type;
    console.log("Selected type:", questionType)
}

function SelectedDifficulty(difficulty) {
    quizStarted = true;
    document.getElementById("quiz-selection").style.display = "none";
    if (questionType === "multiple"){
        FetchMultipleQuestion(difficulty);
    } else if (questionType === "boolean"){
        FetchBooleanQuestion(difficulty)
    }
}

document.getElementById("btn-multible").addEventListener("click", () => {
    questionType = "multiple";
});

document.getElementById("btnboolean").addEventListener("click", () => {
    questionType = "boolean";
});


async function FetchMultipleQuestion(difficulty) {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`);
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

async function FetchBooleanQuestion(difficulty) {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`);
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

function shuffleAnswers(answers) {
    return answers.sort(() => Math.random() - 0.5);
}