/* Image-number picker for the main site. */

function pictureNumber() {
    var input = document.getElementById("number");
    var picture = document.getElementById("pic");
    var imageNumber;
    var imagePath;

    // This page does not include the picker on legacy iOS layouts.
    if (input === null || picture === null) {
        return;
    }

    imageNumber = input.value;

    // Only accept whole, positive image numbers such as 4 or 26.
    if (!/^[1-9][0-9]*$/.test(imageNumber)) {
        picture.src = "Media/image4.avif";
        return;
    }

    imagePath = "Media/image" + imageNumber + ".avif";

    picture.onload = function () {
        picture.onload = null;
        picture.onerror = null;
        console.log("Picture " + imageNumber + " displayed");
    };

    picture.onerror = function () {
        picture.onerror = null;
        picture.onload = null;
        picture.src = "Media/image4.avif";
        console.log("Picture " + imageNumber + " was not found; showing picture 4");
    };

    picture.src = imagePath;
}

function setUpPicturePicker() {
    var input = document.getElementById("number");

    if (input === null) {
        return;
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            pictureNumber();
        }
    }, false);
}

document.addEventListener("DOMContentLoaded", setUpPicturePicker, false);
