console.log('top of plscript was accessed')
window.skipintro2 = function () {
    document.cookie = "postLaunchDone=1; path=/; max-age=31536000";
};

window.watchintro2 = function () {
    document.cookie = "postLaunchDone=0; path=/; max-age=31536000";
};

function getCookie(name) {
    const cookies = document.cookie ? document.cookie.split("; ") : [];

    for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split("=");
        const key = parts[0];
        const value = parts.slice(1).join("="); // safer for encoded values

        if (key === name) return value;
    }

    return null;
}

boot2();

function boot2(){

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
        body.innerHTML = window.afterLoad;
    } else {
        console.warn("body element not found");
    }

}, 6000);
console.log('boot2 has been run')
}

