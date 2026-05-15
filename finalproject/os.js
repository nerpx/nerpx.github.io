
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
                document.getElementById("body").innerHTML = '';
        document.getElementById("body").style.backgroundColor = "#008080";
    setInterval(function() {
          location.reload();
    }, 9000);
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
     setInterval(function() { cnaError(); }, 5000);
    console.log('CAINE.AI PROCESS INITIIALIZING...');
}

function cnaError() {
    console.error('CAINE.AI PROCESS ERROR');
    const errorElement = document.querySelector('.error');
    errorElement.classList.remove('hidden');
}

function closeError() {
    document.getElementById('body').classList.add('errorflash');
    document.getElementById('mainboxnt').classList.add('errorflash');
    setInterval(function() {crash()}, 5000);
}

function crash() {
        document.getElementById('body').classList.remove('errorflash');
    document.getElementById('mainboxnt').classList.remove('errorflash');
    document.getElementById('body').innerHTML = '';
    document.getElementById('body').style.backgroundColor = "#0000A8";
}
