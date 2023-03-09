async function getDefinitions(userQuery) {

    // no empty querys:

    const query = userQuery.trim();

    if (!query) {
        document.getElementById("result_title").innerHTML = "Please no not enter any empty queries.";
        document.getElementById("result").innerHTML = "Don't do it. It's not a word.";
        return;
    }
    
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

    if (responseCode == 404) {
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
        console.log(result);
        let partOfSpeech = result.partOfSpeech;
        let definitions = result.definitions;
        let count = 0;

        html += `<span class="word">${partOfSpeech}</span>:<br>`

        for (let definition of definitions) {
            html += `<span class="word">${++count}.</span>  ${definition.definition}<br>`;
        }
    }

    element.innerHTML = html;
}

document.getElementById("search_form").onsubmit = function() {
    startWaiting();
    
    let searchBar = document.getElementById("search_field");
    let searchQuery = searchBar.value;
    searchBar.value = "";

    getDefinitions(searchQuery);
    return false;
}