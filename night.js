const darkThemeColors = {
    "--background-color": "#242429",
    "--shadow-color": "#181818",
    "--maintext-color": "#abafc5",
    "--search-color": "grey"
};

let usesDarkTheme = document.cookie.includes("usesDarkTheme=true");

if (usesDarkTheme) {
    // swap colors:
    for (cssVariable of ["--background-color", "--shadow-color", "--maintext-color", "--search-color"]) {
        document.querySelector(":root").style.setProperty(cssVariable, darkThemeColors[cssVariable]);
    }

    for (img of document.getElementsByTagName("img")) {
        if (img.src.includes("imgs/plus.png")) {
            img.src = img.src.replace("plus", "plus_dark");
        }
    }

    let searchIcon = document.getElementById("search_icon");
    searchIcon.src = searchIcon.src.replace("search", "search_dark");


}

document.getElementById("night_btn").onclick = function() {
    if (usesDarkTheme) {
        document.cookie = "usesDarkTheme=false";
    } else {
        document.cookie = "usesDarkTheme=true";
    }
    location.reload();
}