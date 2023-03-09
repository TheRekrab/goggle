let searchButton = document.getElementById("submit_query");

searchButton.onclick = document.getElementById("search_form").onsubmit;

let feelingLucky = document.getElementById("random_word");

let showSpinner = true;

async function getRandomWord() {
    const url = "https://random-word-api.herokuapp.com/word";

    let obj;

    let res = await fetch(url);

    obj = await res.json();

    return obj[0];
}

async function isWord(word) {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const res = await fetch(URL, {method: "HEAD"});

    return (res.status == 200);
}

feelingLucky.onclick = async function() {

    if (showSpinner) {
        startWaiting();
    }

    // Check to make sure that it is a word!

    let randomWord;

    while (true) {
        randomWord = await getRandomWord(); // get another word
        showSpinner = false;
        let isValidWord = await isWord(randomWord);
        if (isValidWord) {
            break;
        }
    }

    showSpinner = true;

    document.getElementById("search_field").value = randomWord;
    searchButton.onclick();
}