function createWidget(imgUrl, url, title) {
    let newWidgetDiv = document.createElement("div");
    newWidgetDiv.setAttribute("title", title);
    let widgetContainer = document.getElementById("widgets_container");
    widgetContainer.insertBefore(newWidgetDiv, widgetContainer.lastElementChild);
    
    let newWidgetA = document.createElement("a");
    newWidgetA.setAttribute("href", url);
    newWidgetDiv.append(newWidgetA);

    let newWidgetImg = document.createElement("img");
    newWidgetImg.setAttribute("src", imgUrl);
    newWidgetA.append(newWidgetImg);

    let newWidgetP = document.createElement("p");
    newWidgetP.innerText = title;
    newWidgetA.append(newWidgetP);

}

const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});

let widgetForm = document.getElementById("widget_form");
let widgetImg = document.getElementById("widget_img");
let widgetUrl = document.getElementById("widget_url");
let widgetTitle = document.getElementById("widget_title");

let currentCookies = parseCookie(document.cookie)["widgets"];

let widgets;

if (currentCookies != undefined) {
    widgets = JSON.parse(currentCookies);

    for (let widget of widgets) {
        createWidget(widget[0], widget[1], widget[2]);
    }
} else {
    currentCookies = JSON.stringify([[]]);
    widgets = [[]];
}

widgetForm.onsubmit = function() {
    // close the modal:
    document.getElementById("widget_modal").style.display = "none";
    let url = widgetUrl.value;
    let title = widgetTitle.value;

    let pathArray = url.split( '/' );
    let protocol = pathArray[0];
    let host = pathArray[2];
    let imgUrl = protocol + '//' + host + "/favicon.ico";

    createWidget(imgUrl, url, title);

    // save widget to the cookies:
    widgets.push([imgUrl, url, title]);

    console.log(widgets);

    document.cookie = "widgets=" + JSON.stringify(widgets);

    return false;
}