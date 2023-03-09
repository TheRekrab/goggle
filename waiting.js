// the actually important one:
export async function startWaiting() {
    let textElement = document.getElementById("result");
    let titleElement = documebt.getElementById("result_title");

    textElement.innerHTML = "<span class=\"loader\"></span>";
    titleElement.innerHTML = "Loading...";
}