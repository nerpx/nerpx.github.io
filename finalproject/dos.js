function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split("=");
        if (key === name) return value;
    }

    return null;
}


function DOSKEYCHECK() {
if (getCookie("dosStart") === "0") {
    console.log("halting dos");

} else {
    


const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "dos.css";
link.id = "stylesheet";

document.head.appendChild(link);

window.afterLoad = document.getElementById('body').innerHTML

const DOSCONTENT = `
            <div class="doscontain">
            <div class="tline">
                <img src="dosimages/blueguy.jpg" class="blueguy">
            <p class="toptext">
            Award Modular Bios v4.51PG, An Energy Star Ally<br>
Copyright (C) 1984-98, Award Software, Inc.
</p>
</div>

<p class="dostext" style="display: inline;">
W6168MS V1.3 111700

PENTIUM III-MMX CPU at 500 MHz          ,Host Bus 100MHz
Memory Test : <span><pre style="display: inline;" id="counter" class="counter"> 3932216</pre></span> <p class="dostext">K OK

Award Plug and Play BIOS Extension v1.0A
Copyright (C) 1998, Award Software, Inc.
  <span id="biosload1" class="biosload">Detecting IDE Primary Master  ... 86B_CD00</span>
  <span id="biosload2" class="biosload">Detecting IDE Primary Slave   ... None</span>
  <span id="biosload3" class="biosload">Detecting IDE Secondary Master... None</span>
  <span id="biosload4" class="biosload">Detecting IDE Secondary Slave ... None</span>
  <span  id="biosload5" class="biosload">
Floppy disk(s) fail (40)
CMOS checksum error - Defaults loaded
</span><span class="cursor" id="cursor">&#9608;</span>
</p>
<div class="bottom">
    <p>
Press <span class="highlight">F1</span> to continue, <span class="highlight">DEL</span> to enter setup
<br>05/13/1996-i440ZX-W977-2A69KM4NC-00</p>
        
</div>
        </div>

        <img src="dosimages/energy.WEBP" class="energy">

    </div>
</div>
`;

document.getElementById("body").innerHTML = DOSCONTENT;
console.log('dosdisplayed');

const dosboot = new Audio('Beep.mp3');

setTimeout(() => {

  function animateCountUp(target, duration, elementId) {
    let start = null;
    const element = document.getElementById(elementId);
    if (!element) return;

    const finalLength = target.toString().length;

    function step(timestamp) {
      if (!timestamp) timestamp = performance.now();
      if (!start) start = timestamp;

      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      const currentValue = Math.floor(progress * target);
      const formattedValue = currentValue.toString();

      const missingSpaces = finalLength - formattedValue.length;
      const leadingSpaces = '&nbsp;'.repeat(Math.max(0, missingSpaces));

      element.innerHTML = leadingSpaces + formattedValue;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  animateCountUp(32768, 500, "counter");

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const items = [
    document.getElementById('biosload1'),
    document.getElementById('biosload2'),
    document.getElementById('biosload3'),
    document.getElementById('biosload4'),
    document.getElementById('biosload5')
  ];

  let i = 0;

  async function run() {
    for (const item of items) {
      if (item) {
        item.style.visibility = 'visible';
        await sleep(600);
        console.log('loadingbioslists');
      } else {
        console.warn("An element was not found in the DOM.");
      }
    }

    console.log("Loading sequence finished!");
    handleSequenceFinished();
  }

  run();

}, 0);

function handleSequenceFinished() {
  const cursor = document.getElementById('cursor');
  if (cursor) {
    cursor.style.visibility = 'visible';
        dosboot.play();
  }
}

setTimeout(() => { 
  document.getElementById("stylesheet").remove();
  const script = document.createElement('script');
  script.src = 'postlaunchscripts.js';
  console.log('passoff functionran');
  document.head.appendChild(script);
}, 7000);
}
}