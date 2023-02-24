const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);

let query = urlParams.get("query");

async function getDefinitions() {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;

    let obj;

    const res = await fetch(URL);

    obj = await res.json();

    // setup html element
    let element = document.getElementById("result");

    let html = "";
    document.getElementsByTagName("h1")[0].innerHTML = `Word: <span class="word">"${query}"</span>`;

    // check to make sure it's a word:

    if ("title" in obj) {
        console.log(`${query} is NOT a word!`);
        html += "Sorry, pal. No definitions of that word could be found.";
        element.innerHTML = html;
        return;
    }

    // get phonetics:

    let phonetics = obj[0].phonetics;

    for (ph of phonetics) {
        if ("text" in ph) {
            html += `Phonteics: <i><span class="word">${ph.text}</span></i><br>`;
            break;
        }
    }

    // get definitions:

    let results = obj[0]["meanings"];

    for (result of results) {
        let partOfSpeech = result.partOfSpeech;
        let definition = result.definitions[0].definition;
        html += `<span class="word">${partOfSpeech}</span>: ${definition}<br>`;
    }

    element.innerHTML = html;
}

getDefinitions();