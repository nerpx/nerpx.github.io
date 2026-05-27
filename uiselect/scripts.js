input = 5;
const x = new URLSearchParams(location.search).get("x");
console.log("URL Parameter x:", x);

document.addEventListener("DOMContentLoaded", function () {
  pictureNumber();
});

function pictureNumber() {
  let number = x;
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

function newValue(){
const url = new URL(window.location.href);

// 2. Change your parameter
url.searchParams.set('x', input);

// 3. Force the browser to reload with the new URL
window.location.href = url.href;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    input = parseInt(x || 0) + 1;
    newValue();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowDown') {
    input = parseInt(x || 0) - 1;
    newValue();
  }
});


