document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("number");

  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      pictureNumber();
    }
  });

});

function pictureNumber() {
  const number = document.getElementById("number").value;
  const pic = document.getElementById("pic");

  const imagePath = "Media/image" + number + ".avif";

  pic.onload = function () {
    console.log("Picture " + number + " Displayed");
  };

  pic.onerror = function () {
    console.log("Failed to load Picture " + number);
    pic.onerror = null;
    pic.onload = null;
    pic.src = "Media/image4.avif";
  };

  pic.src = imagePath;
}