/* This version stays compatible with Safari on iOS 6 and iOS 7. */

var BODY =
    '<div class="linkhead">' +
    '<h3>Wall Of Links</h3>' +
    '</div>' +

    '<a href="https://youtube.com" class="redlinks">[Visit YouTube]</a>&nbsp;' +
    '<a href="https://google.com" style="color:gold;">[Visit Google]</a>&nbsp;' +
    '<a href="https://spotify.com" style="color:lime;">[Visit Spotify]</a>&nbsp; <br>' +
    '<a href="https://github.com" style="color:blue;">[Visit Github]</a>&nbsp;' +
    '<a href="https://reddit.com" class="redlinks">[Visit Reddit]</a>' +

    '<br><br>' +

    '<img src="Media/image4.jpg" class="mainimg" width="600" height="400"> <br><br>';


function makeHeader(iosVersion) {
    return (
        '<h1>NerpX</h1>' +
        '<p><i>for iOS ' + iosVersion + '</i></p>' +
        '<a href="index.html" class="hlink"><i>Refresh Page</i></a>'
    );
}


window.onload = function () {
    var ua = navigator.userAgent;
    var isAppleMobile = /iPhone|iPad|iPod/.test(ua);
    var ios = ua.match(/OS ([0-9]+)_/);
    var major;
    var header;
    var main;
    var css;

    if (!isAppleMobile || !ios) {
        return;
    }

    major = parseInt(ios[1], 10);

    // Run the legacy version on iOS 1 through iOS 7.
    if (major >= 8) {
        return;
    }

    header = document.getElementById("header");
    main = document.getElementById("main");
    css = document.getElementById("stylesheet");

    if (header !== null) {
        header.innerHTML = makeHeader(major);
    }

    if (main !== null) {
        main.innerHTML = BODY;
    }

    if (css !== null) {
        css.href = "IOS6.css";
    }
};
