// a nerpx production

let user1 = "admin";
let pass1 = "nerpxinc";
let user2 = "guest";
let pass2 = "nerpxguest";
let user3 = "eli";
let pass3 = "eliisgay";

function guest() {
    document.getElementById("pw").setAttribute('type', 'text');
    document.getElementById("un").value = "guest";
    document.getElementById("pw").value = "nerpxguest";
    setTimeout(() => {
        textSubmit();
      }, 2000);
}

function textSubmit() {
    let username = document.getElementById("un").value;
    let password = document.getElementById("pw").value;
    if (
      (username === user1 && password === pass1) ||
      (username === user2 && password === pass2) ||
      (username === user3 && password === pass3)
    ) {
      document.getElementById("un").value = "Access Granted";
      document.getElementById("pw").value = "Access Granted";
      document.getElementById("button").innerText = "Access Granted";
      document.getElementById("button").disabled = true;
      setTimeout(() => {
        window.location.replace("https://nerpx.github.io");
      }, 2000);
}  else {
      document.getElementById("un").value = "Access Denied";
      document.getElementById("pw").value = "Access Denied";
      document.getElementById("button").innerText = "Access Denied";
      document.getElementById("button").disabled = true;
      document.getElementById("logon").style.backgroundColor = "#489090";
      document.getElementById("pw").setAttribute('type', 'text');
      setTimeout(() => {
        document.getElementById("un").value = "";
        document.getElementById("pw").value = "";
        document.getElementById("button").innerText = "Reattempt Entry";
        document.getElementById("button").disabled = false;
        document.getElementById("logon").style.backgroundColor = "#189d9d";
        document.getElementById("pw").setAttribute('type', 'password');
      }, 2000);
      
    }
}