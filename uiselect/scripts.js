const x = new URLSearchParams(location.search).get("x");
console.log("URL Parameter x:", x);

document.addEventListener("DOMContentLoaded", function () {
  pictureNumber();
});

function pictureNumber() {
  const number = x;
  const pic = document.getElementById("pic");

  // Points to the Media folder at the website root
  const imagePath = "/Media/image" + number + ".avif";
  
  // Logs the exact root path to the console
  console.log("Attempting to load path:", imagePath);

  if (!pic) {
    console.error("CRITICAL ERROR: Could not find an element with id='pic' in your HTML!");
    return;
  }

  pic.onload = function () {
    console.log("Picture " + number + " Displayed");
  };

  pic.onerror = function () {
    console.log("Failed to load Picture " + number + " at " + imagePath);
    pic.onerror = null;
    pic.onload = null;
    // Updated fallback image to point to the root Media folder as well
    pic.src = "/Media/image4.avif";
  };

  pic.src = imagePath;
}
