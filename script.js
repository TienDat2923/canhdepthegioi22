function upDate(element) {
    console.log("Mouse over or focus event activated.");

    var image = element.src;
    var altText = element.alt;

    document.getElementById("image").style.backgroundImage = "url('" + image + "')";
    document.getElementById("image").style.backgroundSize = "cover";
    document.getElementById("image").style.backgroundPosition = "center";
    document.getElementById("image").style.color = "white";
    document.getElementById("image").innerHTML = altText;
}

function unDo() {
    console.log("Mouse leave or blur event activated.");

    document.getElementById("image").style.backgroundImage = "none";
    document.getElementById("image").style.backgroundColor = "white";
    document.getElementById("image").style.color = "#1d3557";
    document.getElementById("image").innerHTML =
        "Hover over or focus on an image to see it here.";
}

function addTabIndex() {
    console.log("Page loaded. Adding tabindex to images.");

    var images = document.querySelectorAll("img");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}