const state = {
    launchComplete: false
};

// -----------------------------
// ORIGINAL SCREEN BACKUP
// -----------------------------
const originalHtml = document.getElementById("body").innerHTML;

// -----------------------------
// BOOT AUDIO
// -----------------------------
const vcraudio = new Audio("hum.mp3");
const gbcboot = new Audio("gbcstart.mp3");

// -----------------------------
// START SEQUENCE
// -----------------------------
async function launchSequence() {

    // VCR SCREEN
    document.getElementById("body").innerHTML = `
        <div class="playscreen" id="vcr">
            <div class="vcrtop">
                <h1 class="vcrplaytext">PLAY &#9654;</h1>
                <h1 class="vcrtime">--<span class="blink">:</span>--</h1> 
            </div>
            <div class="vcrbtm">
                <h1 class="modeselect">SP</h1>
                <h1 class="vcrtime">0:00:00</h1>
            </div>
        </div>
    `;

    // play VCR sound (user gesture required or fallback below)
    vcraudio.currentTime = 0;
    vcraudio.play().catch(() => {});

    // wait 6 seconds
    await wait(6000);

    // GBC SCREEN
    document.getElementById("body").innerHTML =
        '<div class="gbccontain"><img src="gbc.gif" class="gbc"></div>';

    await wait(1200);

    gbcboot.currentTime = 0;
    gbcboot.play().catch(() => {});

    await wait(3000);

    // RESTORE ORIGINAL
    document.getElementById("body").innerHTML = originalHtml;
    document.getElementById("body").className = "body";

    // SIGNAL DONE
    state.launchComplete = true;
    window.dispatchEvent(new Event("launchDone"));
}

// helper
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// start automatically
launchSequence();