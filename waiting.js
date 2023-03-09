async function startWaiting() {
    let textElement = document.getElementById("result");
    let titleElement = document.getElementById("result_title");

    textElement.innerHTML = "<span class=\"loader\"></span>";
    titleElement.innerHTML = "Loading...";
    document.getElementById("result_modal").style.display = "block";
}