const about = `<h3>About</h3>
<p class="aboutp" > NerpX is a concept website made by a highschooler, Just like many things the purpose is up to
consideration... Ill probably post random stuff here, why did this highly moronic paragraph need its own page
you ask??? and I respond "I dont know thats up for you to decide.." </p> <div class="br"></div> <p>Anyways, Buy some SpaceX IPA!!!</p>
<div class="br"></div> <p> -NerpX 2026 </p>
<div class="br">`;

const info = `<h3>Info</h3>
<p>NerpX is <b>NOT</b> a multi owner buisness its all run and coded by me, I felt this was important due to the fact
the name "NerpX" may sound like a big buisness.</p>
<div class="halfbr"></div><p> My interest and learning of html began in april 2024, It wasnt untill near feburary 2025 that I began learning css and html <b>with serious intentions </b>
<p> As said many times before practice makes perfect so now Im pretty good at html css AND js now </p>`

// journal entries start

    const journalEntries = [
        {
            title: "First Entry",
            date: "08/07/2026",
            content: `
            <h3>First Entry</h3>
            <p>I came up with the idea of a journal thing pretty recently and figured "why not start by explaining why?" Its honestly just as simple as; its cool to write about things i do!
            </p>
            `
        },

        {
            title: "Explaining development",
            date: "08/07/2026",
            content: `
            <h3>First Entry</h3>
            <p>Ok, So I think this website is pretty cool but im still figuring out things to do with it, Now not to say this website is "free" but hosting it doesnt cost anything. And if you ask me
            the price of the headache it takes to make this is enough already. I want this website to look professional and well built before <u> widely </u> releasing it to the public and advertizing it.
            theres nothing that special or crazy about this website for the mass majority of people to visit it but its enough to show on social media and to friends. As Im writing this paragraph im in Beta 1.0
            and have previously progressed through 5 generations of rough drafting and development, some people make a version change for everything they do but in my opinion if its not a worthy change then it doesnt deserve its own version change
            , like for example grammar fixes; its not like the average person will notice a typo so i think its a bit much to act like its a different version of the site.
            Im ok with the changes so far and think soon this will be worthy of leaving the main dev faze to enter the basic maintenence faze. Y-know like the part where all that really gets changed around is the content
            the reason im in beta right now is because im happy with the design and feel theres not much more changes neccessarry to be made.
            </p>
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
        document.getElementById("journalContent").innerHTML =
        journalEntries[index].content;
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
        }

        if (activeButton === "info") {
            mainright.innerHTML = info;
        }

        if (activeButton === "subpages") {
            mainright.innerHTML = subpages;
        }

        if (activeButton === "news") {
            mainright.innerHTML = news;
            document.getElementById('mainright').classList = "sidebar sideadjust";
        }

        if (activeButton === "main") {
            mainright.innerHTML = main;
        }

        if (activeButton === "journal") {
            mainright.innerHTML = journal;
        }
    });
});

