const about = `<h3>About</h3>
<p class="aboutp" > NerpX is a concept website made by a highschooler, Just like many things the purpose is up to
consideration... Ill probably post random stuff here, why did this highly moronic paragraph need its own page
you ask??? and I respond "I dont know thats up for you to decide.." </p> <div class="br"></div> <p>Anyways, Buy some SpaceX IPA!!!</p>
<div class="br"></div> <p> -NerpX 2026 </p>
<div class="br">`;

const info = `<h3>Profile</h3>
<img src="/images/ibm.jpeg"></img>
<p><a href="https://github.com/nerpx" target="_blank" style="text-decoration: underline;">NerpX on Github</a></p>
<p>I make websites and fix stuff.</p>
<div class="br"></div>
<h4>Links</h4>
    <a href="https://github.com/nerpx" target="_blank"><p>My Github</p></a>
    <a href="https://bsky.app/profile/nerpx.github.io" target="_blank"><p>My Bluesky</p></a>
    <a href="https://josemi0-0.github.io" target="_blank"><p>Jose's Site</p></a>`

// journal entries start

    const journalEntries = [
        {
            title: "First Entry",
            date: "08/07/2026",
            content: `
            <h3 id="title"></h3>
            <p>I came up with the idea of a journal thing pretty recently and figured "why not start by explaining why?" Its honestly just as simple as; its cool to write about things i do!
            </p>
            `
        },

        {
            title: "Explaining development",
            date: "08/07/2026",
            content: `
            <h3 id="title"></h3>
            <p>Ok, So I think this website is pretty cool but im still figuring out things to do with it, Now not to say this website is "free" but hosting it doesnt cost anything. And if you ask me
            the price of the headache it takes to make this is enough already. I want this website to look professional and well built before <u> widely </u> releasing it to the public and advertizing it.
            theres nothing that special or crazy about this website for the mass majority of people to visit it but its enough to show on social media and to friends. As Im writing this paragraph im in Beta 1.0
            and have previously progressed through 5 generations of rough drafting and development, some people make a version change for everything they do but in my opinion if its not a worthy change then it doesnt deserve its own version change
            , like for example grammar fixes; its not like the average person will notice a typo so i think its a bit much to act like its a different version of the site.
            Im ok with the changes so far and think soon this will be worthy of leaving the main dev faze to enter the basic maintenence faze. Y-know like the part where all that really gets changed around is the content
            the reason im in beta right now is because im happy with the design and feel theres not much more changes neccessarry to be made.
            </p>
            `
        },

        {
            title: "Beta 2.0",
            date: "08/07/2026",
            content: `
            <h3 id="title"></h3>
            <p>With the new addition of Beta 2.0 I am closing in on my goal for how this site will be and how its going to be presented, and honestly its looking pretty good. My sorta "eta" for when this site will be out of beta is probably 2 versions away, meaning beta 5.0 is
            likely to be the final release</p>
            `
        }
    ];


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
const main = document.getElementById('mainright').innerHTML;
const news = document.getElementById('news').innerHTML;
const mainright = document.getElementById("mainright");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active from every button
        buttons.forEach(btn => btn.classList.remove("active"));

        // Add active to clicked button
        button.classList.add("active");

        // Detect which button was clicked
        const activeButton = button.id;

        // Change content
        if (activeButton === "about") {
            mainright.innerHTML = about;
            document.getElementById('mainright').classList = "mainright";
        }

        if (activeButton === "info") {
            mainright.innerHTML = info;
            document.getElementById('mainright').classList = "mainright";
        }

        if (activeButton === "subpages") {
            mainright.innerHTML = subpages;
            document.getElementById('mainright').classList = "mainright";
        }

        if (activeButton === "news") {
            mainright.innerHTML = news;
            document.getElementById('mainright').classList = "sidebar sideadjust";
        }

        if (activeButton === "main") {
            mainright.innerHTML = main;
            document.getElementById('mainright').classList = "mainright";
        }

        if (activeButton === "journal") {
            mainright.innerHTML = journal;
            document.getElementById('mainright').classList = "mainright";
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

window.addEventListener("resize", checkNewsVisibility);
checkNewsVisibility();