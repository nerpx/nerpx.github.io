const about = `<h3>About</h3>
<p class="aboutp" > NerpX is a concept website made by a highschooler, Just like many things the purpose is up to
consideration... Ill probably post random stuff here, why did this highly moronic paragraph need its own page
you ask??? and I respond "I dont know thats up for you to decide.." </p> <div class="br"></div> <p>Anyways, Buy some SpaceX IPA!!!</p>
<div class="br"></div> <p> NerpX Alpha 5.0 </p>`;


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
    });
});

