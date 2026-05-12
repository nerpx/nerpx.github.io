

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

//document.getElementById("body").innerHTML = orginHtml;

const orginHtml = document.getElementById('body').innerHTML
document.getElementById('body').innerHTML = vcrCode;

const vcraudio = new Audio('hum.mp3');
vcraudio.play();


// resets timer before next one
function clearTimer() {
    clearTimeout(timerId);
}

// initialize boot sound for gbc function
const gbcboot = new Audio('gbcstart.mp3');

// wait for vcr to be done

const timerId = setTimeout(() => { 

    toGbc();

    setTimeout(() => { 
        gbcboot.play();
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

        // load post launch script
        const script = document.createElement("script");
        script.src = "postlaunchscripts.js";
        document.body.appendChild(script);

    }, 3000);
}

// vcr stopwatch thingy 

let seconds = 0;
const maxSeconds = 5;
const timerElement = document.getElementById("timer");

// Update every 1000ms (1 second)
const interval = setInterval(() => {

    seconds++;
    timerElement.innerHTML = seconds;

    if (seconds >= maxSeconds) {
        clearInterval(interval);
    }

}, 1000);

console.log(orginHtml);

// -----------------------------
// SAFE AUDIO UNLOCK (NO TIMING INTERFERENCE)
// -----------------------------

(function () {

    let unlocked = false;

    function unlockAudioOnly() {

        if (unlocked) return;
        unlocked = true;

        // only unlock audio engine, DO NOT play anything
        try {

            const silent = new Audio();
            silent.play().catch(() => {});

            console.log("Audio unlocked safely (no autoplay triggered)");

        } catch (e) {}
    }

    // Safari requires gesture → this unlocks it properly
    document.addEventListener("click", unlockAudioOnly, { once: true });
    document.addEventListener("keydown", unlockAudioOnly, { once: true });
    document.addEventListener("touchstart", unlockAudioOnly, { once: true });

})();