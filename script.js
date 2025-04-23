async function FetchApiCall() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Failed to fetch data from API", err)
    }
}

FetchApiCall();