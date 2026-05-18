const bluescreen = `<div class="container">
            <p class="windows">Windows</p>
            <p class="perror">An error has occured. To continue:

Press Enter to return to Windows, or 

Press CTRL+ALT+DEL to restart your computer. If you do this,
you will lose any unsaved information in all open applications.

Error: 4B : 316F : B8FC41N3
</p><p class="perror"> Press any key to continue <span class="blink">_</span></p>
            </div>`;

const errornoise = new Audio('error.mp3');

const logoff = new Audio('logoff.mp3');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    
    let timeString;
    if (displayHours === 4) {
        timeString = `4:${minutes}`;
    } else {
        timeString = `${displayHours}:${minutes} ${ampm}`;
    }

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
function startbutton() {
    console.log('startbutton clicked');
    const element = document.getElementById('windowsmenu');
    element.classList.toggle('hidden');
}

function shutdown() {
            logoff.play();
        console.log('shutdown initiated');
        document.cookie = "bootDone=0; path=/; max-age=31536000";
        document.cookie = "dosStart=1; path=/; max-age=31536000";
                document.getElementById("body").innerHTML = `
                <div class="ntcontain">
    <img src="nt4.0.png" class="nt" id="nt">
</div>     `;
        document.getElementById("body").style.backgroundColor = "#008080";
    setInterval(function() {
          location.reload();
    }, 9000);
}

function postCrashReboot() {
            document.cookie = "bootDone=0; path=/; max-age=31536000";
        document.cookie = "dosStart=1; path=/; max-age=31536000";
         location.reload();
}
    
function guessWho() {
    console.log('guesswho function called');
    const guess = document.getElementById('guesswho');
    guess.classList.toggle('hidden');
    console.log('guesswho function completed');
}

function closeWindow() {
    guessWho();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

function cna() {
    console.log('CAINE.AI PROCESS INITIALIZING...');

    const interval = setInterval(function () {
        cnaError();
    }, 5000);

    setTimeout(function () {
        clearInterval(interval);
        console.log("CNA stopped");
    }, 5000);
}

function cnaError() {
    console.error('CAINE.AI PROCESS ERROR');
    errornoise.play();
    const errorElement = document.querySelector('.error');
    errorElement.classList.remove('hidden');
}

function closeError() {
    document.getElementById('body').classList.add('errorflash');
    document.getElementById('mainboxnt').classList.add('errorflash');
    setInterval(function() {crash()}, 5000);
}

function crash() {
    document.getElementById("nt").href = "bsod.css";
        document.getElementById('body').classList.remove('errorflash');
    document.getElementById('mainboxnt').classList.remove('errorflash');
    document.getElementById('body').innerHTML = bluescreen;
    document.getElementById('body').style.backgroundColor = "#0000A8";
    setInterval(function() {
          postCrashReboot();
    }, 9000);
}

// SETTINGS BUTTON
function cookiereset() {
    document.cookie = "bootDone=0; path=/; max-age=31536000";
    document.cookie = "dosStart=0; path=/; max-age=31536000";
}

// RUN BUTTON
function refresh() {
    location.reload();
}

function guessWhoHide() {
    console.log('guesswho window function called');
    const guesswindowthing = document.getElementById('guesswhohw');
    guesswindowthing.classList.toggle('hidden');
    console.log('guesswho window showed');
    closeWindow();
}

function guessWhoButtonClick() {
    console.log('guesswho window function called');
    const guesswindowthingshow = document.getElementById('guesswhohw');
    guesswindowthingshow.classList.toggle('hidden');
    console.log('guesswho window showed');
    closeWindow();
}

function guessWhoFullScreen() {
    const guesswindowthing = document.getElementById('guesswho');
    guesswindowthing.classList.toggle('guesswhofullscreen');
}
