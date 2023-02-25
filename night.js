const darkThemeColors = {
    true: {
        "--background-color": "#242429",
        "--shadow-color": "#181818",
        "--maintext-color": "#abafc5",
        "--search-color": "grey"
    },
    false: {
        "--background-color": getComputedStyle(document.documentElement).getPropertyValue("--background-color"),
        "--shadow-color": getComputedStyle(document.documentElement).getPropertyValue("--shadow-color"),
        "--maintext-color": getComputedStyle(document.documentElement).getPropertyValue("--maintext-color"),
        "--search-color": getComputedStyle(document.documentElement).getPropertyValue("--search-color")
    }
    
};

let usesDarkTheme = document.cookie.includes("usesDarkTheme=true");

function update() {

    for (cssVariable of ["--background-color", "--shadow-color", "--maintext-color", "--search-color"]) {
        document.querySelector(":root").style.setProperty(cssVariable, darkThemeColors[usesDarkTheme][cssVariable]);
    }

    for (img of document.getElementsByTagName("img")) {
        if (img.src.includes("imgs/plus.png") && usesDarkTheme) {
            img.src = img.src.replace("plus", "plus_dark");
        } else if (img.src.includes("imgs/plus_dark.png") && !usesDarkTheme) {
            img.src = img.src.replace("plus_dark", "plus");
        }
    }

    let searchIcon = document.getElementById("search_icon");
    if (usesDarkTheme) {
        searchIcon.src = searchIcon.src.replace("search", "search_dark");
    } else {
        searchIcon.src = searchIcon.src.replace("search_dark", "search");
    }

}

update();

document.getElementById("night_btn").onclick = function() {
    if (usesDarkTheme) {
        document.cookie = "usesDarkTheme=false";
        usesDarkTheme = false;
    } else {
        document.cookie = "usesDarkTheme=true";
        usesDarkTheme = true;
    }
    update();
}