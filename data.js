// Phrases
const phrases = [
    "Mari Kart.",
    "Check out jose's site!",
    `rockstar games give me money`,
    `GTA 6!`,
];

// Tabs
const main = `<h3> Main </h3>
<img src="images/laptop.jpg">
<p>My latest repair: <br> 2008 HP Pavillion DV4-1222nr <br> Read about it under the <i>journal</i> tab.</p>`;

const about = `
<h3>About</h3>
<div class="brhalf"></div> 
<p class="aboutp">"Hopefully things'll be better in november... That's when grand theft auto six comes out."</p>
<div class="brdouble"></div>
<p> -South Park 2026 </p>
<div class="br"></div>
<p>Version: Public Release 1.3.1</p>
<div class="br"></div>`
//<p>Random cats provided by thecatapi.com</p>`;

const hints = `<h3>Hints</h3>
<!-- <p>Dont like your current cat picture? Click it and get a new random cat!</p>
<div class="br"></div> -->
<p>Dont have enough room? Try clicking the "Welcome to NerpX!" banner to hide the sidebuttons.</p>
<div class="br"></div>
<p>If you would like to enter fullscreen mode, simply click the site header.</p>
<div class="br"></div>
<p>Any problems or suggestions? Please contact me at the email provided in the contact section.</p>
<div class="br"></div>
<p>Find extra projects of mine at my github under the profile tab.</p>`;

const info = `<h3>Profile</h3>
<img src="/images/ibm.jpeg" alt="Profile Picture"></img>
<p><a href="https://github.com/nerpx" target="_blank" style="text-decoration: underline;">NerpX on Github</a></p>
<p>I make websites and fix stuff.</p>
<div class="br"></div>
<h4>Links</h4>
    <a href="https://github.com/nerpx" target="_blank"><p>My Github</p></a>
    <a href="https://bsky.app/profile/nerpx.github.io" target="_blank"><p>My Bluesky</p></a>
    <a href="https://josemi0-0.github.io" target="_blank"><p>Jose's Website</p></a>`;

const contact = `<h3>Contact</h3>
<p>Problems? Just send a Email to the following email</p>
<p>nerpx1@gmail.com</p>
<p>The same email serves as the general purpose site email for inquiries, support, or suggestions.</p>`;

const countdown = 19 - new Date().getDate();

// journal
const journalEntries = [
        {
            title: "2008 Laptop Repair",
            date: "11/09/2026",
            content: `
            <h3 id="title"></h3>
            <p>My most recent project is repairing a 2008 HP Pavilion.</p>
            <div class="halfbr"></div>
            <p>The full model number of this particular laptop is:</p>
            <div class="halfbr"></div>
            <p>HP Pavilion dv4-1222nr</p>
            <div class="halfbr"></div>
            <p>The problem with this laptop was a lack of power, it wouldnt turn on or even charge. </p>
            <p> Turns out, the source of this was a mosfet that controlled the power entering the laptop, The 4835D mosfet had a complete internal short circuit. </p>
            <p> Now, Im not totally sure about what caused it, and what saved this laptop. What I do know however is that the laptop would function off of precharged batteries,
            along with this strange behaviour it would falsely report that it was charging despite dying shortly after. </p>
            <p> After a full replacement of this "Gatekeeper" Mosfet, the laptop was returned to full functionality!`
        }
    ];
