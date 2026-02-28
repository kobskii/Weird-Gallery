/*Name this external file gallery.js*/

function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Page loaded - adding tabindex to images");

    var pics = document.querySelectorAll(".preview");

    for (var i = 0; i < pics.length; i++) {
        pics[i].setAttribute("tabindex", i + 1);
    }
}
