let searchButton = document.getElementById("submit_query");

searchButton.onclick = document.getElementById("search_form").onsubmit;

let feelingLucky = document.getElementById("random_word");

async function getRandomWord() {
    const url = "https://random-word-api.herokuapp.com/word?length=5";

    let obj;

    let res = await fetch(url);

    obj = await res.json();

    return obj[0];
}

feelingLucky.onclick = async function() {
    let randomWord = await getRandomWord();


    document.getElementById("search_field").value = randomWord;
    searchButton.onclick();
}