   document.cookie = "dosStart=0; path=/;";

function skipintronexttime() {
    document.cookie = "bootDone=1; path=/; max-age=31536000";
}

function watchintro() {
    document.cookie = "bootDone=0; path=/; max-age=31536000";
}

function skipintro2() {
    document.cookie = "postLaunchDone=1; path=/; max-age=31536000";
}

function watchintro2() {
    document.cookie = "postLaunchDone=0; path=/; max-age=31536000";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split("=");
        if (key === name) return value;
    }

    return null;
}

if (getCookie("dosStart") === "1") {
    console.log("start cookie set ok");
} 

// 🔥 ADDED GUARD (prevents double loading postlaunch script)
window.__postLaunchLoaded = false;

if (getCookie("bootDone") === "1") {
    console.log("boot sequence has already happened before, skipping by default");
} else {
    BOOTSEQUENCE(); 
}


function BOOTSEQUENCE() {

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

        const orginHtml = document.getElementById('body').innerHTML;
        document.getElementById('body').innerHTML = vcrCode;

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

        const timerId = setTimeout(() => { 

            toGbc();

            setTimeout(() => { 
                safePlay(gbcboot);
            }, 1200);

        }, 5800);

        function toGbc() {

            document.getElementById("body").innerHTML =
            '<div class="gbccontain"> <img id="gbcGif" src="gbc.gif?'+Date.now()+'" class="gbc"> </div>';

            setTimeout(() => { 

                document.getElementById('body').innerHTML = orginHtml;
                document.getElementById("body").className = "body";

                actionallow++;

                // 🔥 ALSO PROTECTED HERE
                if (!window.__postLaunchLoaded) {
                    window.__postLaunchLoaded = true;
                    document.cookie = "dosStart=1; path=/; "
                }
                if (getCookie("dosStart") === "1") {
    console.log("start cookie set ok");
    DOSKEYCHECK();
} 

            }, 3000);
        }

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

        setTimeout(startTimer, 50);

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
}
