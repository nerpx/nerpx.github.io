function startPostLaunch() {
    console.log("Post-launch script running");
    const ntstart = new Audio("nt4.mp3")
    ntstart.play();
}

// If already done, run immediately
if (window.state?.launchComplete) {
    startPostLaunch();
}

// Otherwise wait for signal
window.addEventListener("launchDone", startPostLaunch);