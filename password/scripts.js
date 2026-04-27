function textSubmit() {
    let username = document.getElementById("un").value;
    let password = document.getElementById("pw").value;
    if (username === "admin" && password === "nerpxinc") {
      document.getElementById("un").value = "Access Granted";
      document.getElementById("pw").value = "Access Granted";
      document.getElementById("button").innerText = "Access Granted";
      document.getElementById("button").disabled = true;
      document.getElementById("body").style.backgroundColor = "black";
      setTimeout(() => {
        window.location.replace("https://www.example.com");
      }, 2000);
}  else {
      document.getElementById("un").value = "Access Denied";
      document.getElementById("pw").value = "Access Denied";
      document.getElementById("button").innerText = "Access Denied";
      document.getElementById("button").disabled = true;
      document.getElementById("body").style.backgroundColor = "#004040";
      setTimeout(() => {
        document.getElementById("un").value = "";
        document.getElementById("pw").value = "";
        document.getElementById("button").innerText = "Rettempt Entry";
        document.getElementById("button").disabled = false;
        document.getElementById("body").style.backgroundColor = "#008080";
      }, 2000);
      
    }
}