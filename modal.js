let aboutModal = document.getElementById("about_modal");
let aboutOpen = document.getElementById("about_btn");
let aboutClose = document.getElementById("about_close_btn");

let resultModal = document.getElementById("result_modal");
let resultClose = document.getElementById("result_close_btn");

aboutOpen.onclick = function() {
    aboutModal.style.display = "block";
}

aboutClose.onclick = function() {
    aboutModal.style.display = "none";
}

resultClose.onclick = function() {
    resultModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = "none";
    } else if (event.target == resultModal) {
        resultModal.style.display = "none";
    }
}