const now = new Date();

const month = now.getMonth() + 1; // 8
const date = now.getDate();       // 19

if (month == 8 && date == 22) {
    document.getElementById('phrase').innerText= "Happy Birthday To Me!";
}

if (month == 12 && date == 27) {
    document.getElementById('phrase').innerText= "Happy Birthday Jose!";
}