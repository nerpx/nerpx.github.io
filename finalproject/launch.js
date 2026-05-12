const vcrCode = `
                <!-- VCR PLAY SCREEN-->
                <div class="playscreen" id="vcr">
                <div class="vcrtop">
                    <h1 class="vcrplaytext">PLAY &#9654;</h1>
                    <h1 class="vcrtime">--<span class= "blink">:</span>--</h1> 
                    </div>
                    <div class="vcrbtm">
                    <h1 class="modeselect">SP</h1>
                    <h1 class="vcrtime">0:00:0<span id="timer">0</span></h1>
                </div>
                <!-- end of vcr play screen-->      
`;

let actionallow = 0;

const orginHtml = document.getElementById('body').innerHTML
document.getElementById('body').innerHTML = vcrCode;


// -----------------------------
// SAFE AUDIO PLAY (Safari fix)
// -----------------------------
function safePlay(audio) {
    if (!audio) return;
    const p = audio.play();
    if (p && typeof p.catch === "function") {
        p.catch(() => {});
    }
}

const vcraudio = new Audio('hum.mp3');
const gbcboot = new Audio('gbcstart.mp3');

safePlay(vcraudio);


// wait for vcr to be done
const timerId = setTimeout(() => { 

    toGbc();

    setTimeout(() => { 
        safePlay(gbcboot);
    }, 1200);

}, 6000);


// gbc boot and transfer function
function toGbc() {

    document.getElementById("body").innerHTML =
        '<div class="gbccontain"> <img src="gbc.gif" class="gbc"> </div>';

    setTimeout(() => { 

        document.getElementById('body').innerHTML = orginHtml;
        document.getElementById("body").className = "body";

        actionallow++;

        const script = document.createElement("script");
        script.src = "postlaunchscripts.js";
        document.body.appendChild(script);

    }, 3000);
}


// -----------------------------
// SAFARI-SAFE TIMER (FIXED)
// -----------------------------
let seconds = 0;
const maxSeconds = 5;

function startTimer() {

    const el = document.getElementById("timer");
    if (!el) return;

    const interval = setInterval(() => {

        seconds++;
        const timerEl = document.getElementById("timer");

        if (timerEl) {
            timerEl.innerHTML = seconds;
        }

        if (seconds >= maxSeconds) {
            clearInterval(interval);
        }

    }, 1000);
}

// delay timer start until DOM is stable (Safari fix)
setTimeout(startTimer, 50);


// -----------------------------
// SAFE AUDIO UNLOCK (UNCHANGED)
// -----------------------------
(function () {

    let unlocked = false;

    function unlockAudioOnly() {

        if (unlocked) return;
        unlocked = true;

        try {
            const silent = new Audio();
            silent.play().catch(() => {});
        } catch (e) {}

    }

    document.addEventListener("click", unlockAudioOnly, { once: true });
    document.addEventListener("keydown", unlockAudioOnly, { once: true });
    document.addEventListener("touchstart", unlockAudioOnly, { once: true });

})();