//RDM phrase gen
let phrasenum = Math.floor(Math.random() * phrases.length);
let phrasefull = phrases[phrasenum];
document.getElementById("phrase").innerText = phrasefull;

    let journal = `
    <h3>Journal</h3>
    <div id="journalButtons">
    `;

    journalEntries.forEach((entry, index) => {
        journal += `
        <button onclick="openJournal(${index})">
            ${entry.date} - ${entry.title}
        </button>
        `;
    });

    journal += `
    </div>
    <div class="br"></div>
    <div id="journalContent">
    </div>
    `;

    function openJournal(index) {
    const entry = journalEntries[index];

    document.getElementById("journalContent").innerHTML =
        entry.content.replace(
            '<h3 id="title"></h3>',
            `<h3 id="title">${entry.title}</h3>`
        );
}

// end journal script

const subpages = `<h3>Subpages</h3>
                <p> No subpages yet...</p>`;
const buttons = document.querySelectorAll(".toggle");
const mainright = document.getElementById("mainright");
const news = document.getElementById("news-sidebar").innerHTML;

mainright.innerHTML = main;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active from every button
        buttons.forEach(btn => btn.classList.remove("active"));

        // Add active to clicked button
        button.classList.add("active");

        // Detect which button was clicked
        const activeButton = button.id;

        // If statements for the toggles
        if (activeButton === "about") {
            mainright.innerHTML = about;
            mainright.classList = "mainright";
        }

        if (activeButton === "info") {
            mainright.innerHTML = info;
            mainright.classList = "mainright";
        }

        if (activeButton === "subpages") {
            mainright.innerHTML = subpages;
            mainright.classList = "mainright";
        }

        if (activeButton === "news") {
            mainright.innerHTML = news;
            mainright.classList = "sidebar sideadjust";
        }

       if (activeButton === "main") {
            mainright.innerHTML = main;
            mainright.classList = "mainright";

            document.getElementById("cat").src = imgsave;
        }

        if (activeButton === "journal") {
            mainright.innerHTML = journal;
            mainright.classList = "mainright";
        }

        if (activeButton === "contact") {
            mainright.innerHTML = contact;
            mainright.classList = "mainright";
        }

        if (activeButton === "hints") {
            mainright.innerHTML = hints;
            mainright.classList = "mainright";
        }
    });
});

let previousWidth = window.innerWidth;

function checkNewsVisibility() {
    const currentWidth = window.innerWidth;

    // Only run if the width actually changed
    if (currentWidth === previousWidth) return;

    previousWidth = currentWidth;

    const active = document.querySelector(".toggle.active");

    if (currentWidth <= 480 && active?.id === "news") {
        mainright.innerHTML = main;
        mainright.className = "mainright";

        buttons.forEach(btn => btn.classList.remove("active"));
        document.getElementById("main").classList.add("active");
    }
}

function leftHide() { 
  const left = document.getElementById("mainleft"); 
  const right = document.getElementById("mainright"); 

  if (left && right) {
    left.classList.toggle("hide"); 
    right.classList.toggle("lefthide"); 
  }
}

window.addEventListener("resize", checkNewsVisibility);
checkNewsVisibility();

let imgsave = "";

/* async function getRandomCat() {
    const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
    );

    const data = await response.json();

    imgsave = data[0].url;
    document.getElementById("cat").src = imgsave;
}

getRandomCat(); */

function fullscreen() {
    document.documentElement.requestFullscreen();
}

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const countdownText = document.getElementById("countdown-text");
    if (countdownElement) {
        if (countdown > 0) {
            countdownElement.textContent = countdown;
        } else {
            countdownText.textContent = "GTA VI is out!";
        }
    }

}
updateCountdown();