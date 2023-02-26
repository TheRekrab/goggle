async function getDefinitions() {
    // get query:
    let query = document.getElementById("search_field").value;

    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;

    let obj;

    const res = await fetch(URL);

    obj = await res.json();

    // setup html element
    let element = document.getElementById("result");

    let html = "";
    document.getElementById("result_title").innerHTML = `Word: <span class="word">"${query}"</span>`;

    // check to make sure it's a word:

    const responseCode = res.status;

    if (responseCode) {
        html += "Sorry, pal. No definitions of that word could be found.";
        element.innerHTML = html;
        return;
    }

    // get phonetics:

    let phonetics = obj[0].phonetics;

    for (let ph of phonetics) {
        if ("text" in ph) {
            html += `Phonteics: <i><span class="word">${ph.text}</span></i><br>`;
            break;
        }
    }

    // get definitions:

    let results = obj[0]["meanings"];

    for (let result of results) {
        let partOfSpeech = result.partOfSpeech;
        let definition = result.definitions[0].definition;
        html += `<span class="word">${partOfSpeech}</span>: ${definition}<br>`;
    }

    element.innerHTML = html;
}

document.getElementById("search_form").onsubmit = function() {
    getDefinitions();
    document.getElementById("result_modal").style.display = "block";
    document.getElementById("search_field").value = "";
    return false;
}