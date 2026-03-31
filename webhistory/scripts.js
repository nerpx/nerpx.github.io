function Myfunction() {
    let x = document.getElementById("myText").value;
    document.getElementById("something").innerText = x;
}

document.addEventListener('DOMContentLoaded', function() {
  // 1. Get the element first
const textInput = document.getElementById("myText");

// 2. Add the event listener to the correct variable
textInput.addEventListener('keyup', (event) => {
    // 3. Check for 'Enter' key
    if (event.key === 'Enter') {

    let x = document.getElementById("myText").value;
    document.getElementById("something").innerText = x;
    }
});;
});
