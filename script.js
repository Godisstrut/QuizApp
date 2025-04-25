async function FetchApiCall() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");
        const data = await response.json();
        console.log(data);
        const question = data.results[0];
        const answer = data.results[0];
        DisplayQuestion(question, answer);
    } catch (err) {
        console.error("Failed to fetch data from API", err)
    }
}

function DisplayQuestion(question, answer) {
    document.getElementById("questions").textContent = question.question
    document.getElementById("answers").textContent = answer.correct_answer
    document.getElementById("answers").textContent = answer.incorrect_answer
}

FetchApiCall();