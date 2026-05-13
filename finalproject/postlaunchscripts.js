const afterLoad = document.getElementById('body').innerHTML

const ntstart = new Audio("nt4.mp3");

// Safari fix: handle rejected play() promise
ntstart.play().catch(() => {
    // Safari may block autoplay — ignore safely so script continues
});

const load = `
<div class="ntcontain">
    <img src="nt4.0.png" class="nt" id="nt">
</div>            
`;

document.getElementById("body").innerHTML = load;

setTimeout(() => {
    const body = document.getElementById('body');

    // extra Safari safety check (prevents silent null errors)
    if (body) {
        body.innerHTML = afterLoad;
    } else {
        console.warn("body element not found");
    }

}, 6000);
