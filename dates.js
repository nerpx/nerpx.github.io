const now = new Date();

const month = now.getMonth() + 1; // 8
const date = now.getDate();       // 19

// Special Days :]

if (month == 8 && date == 22) {
    document.getElementById('phrase').innerText= "Happy Birthday To Me!";
}

if (month == 12 && date == 27) {
    document.getElementById('phrase').innerText= "Happy Birthday Jose!";
}

if (month == 11 && date == 19) {
    document.getElementById('phrase').innerText= "GRAND THEFT AUTO 6!!!";
}

// Holidays

if (month == 11 && date == 26) {
    document.getElementById('phrase').innerText= "Happy Thanksgiving!";
}

if (month == 10 && date == 31) {
    document.getElementById('phrase').innerText= "Happy Halloween!";
}

if (month == 12 && date == 24) {
    document.getElementById('phrase').innerText= "One more day...";
}

if (month == 12 && date == 25) {
    document.getElementById('phrase').innerText= "Merry Christmas!";
}