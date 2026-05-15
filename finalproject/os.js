
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