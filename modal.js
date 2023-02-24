let modal = document.getElementById("about_modal");

let open = document.getElementById("about_btn");

let close = document.getElementById("close_btn");

open.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    console.log(event);
    if (event.target == modal) {
        modal.style.display = "none";
    }
}