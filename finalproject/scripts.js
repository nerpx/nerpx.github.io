const vcrCode = `
                <!-- VCR PLAY SCREEN-->
                <div class="playscreen">
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
 
 
 // resets timer before next one
 function clearTimer() {
    clearTimeout(timerId);
}

// initialize boot sound for gbc function
const gbcboot = new Audio('gbcstart.mp3');

// wait for vcr to be done

const timerId = setTimeout(() => { 
    toGbc();
    const timerId = setTimeout(() => { 
      gbcboot.play();
 }, 1200);
 }, 6000);


// gbc boot and transfer function

function toGbc() {
        document.getElementById("body").innerHTML = '<div class="gbccontain"> <img src="gbc.gif" class="gbc"> </div>';
        const timerId = setTimeout(() => { 
          document.getElementById("body").innerHTML = "<h1 class='enterforpage'>Press Enter</p> ";
          document.getElementById("body").className = "whitescreen";
          actionallow++;
 }, 3000);
}

// checks that boot was succesfull

if (actionallow = 1){
  document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('body').innerHTML = orginHtml;
  document.getElementById("body").className = "body";
  }
});
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