var HEADR =
    "<h1>NerpX</h1>" +
    "<p><i>for iOS 6</i></p>" +
    '<a href="index.html" class="hlink"><i>Refresh Page</i></a>';


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

    '<img src="Media/image4.jpg" class="mainimg" width="600" height="400"> <br><br>'


window.onload = function () {

    var ua = navigator.userAgent;

    var isIPhone = ua.indexOf("iPhone") > -1;

    var ios = ua.match(/OS ([0-9]+)_([0-9]+)/);


    if (isIPhone && ios) {

        var major = ios[1];


        if (major == "6") {

            var header = document.getElementById("header");
            var main = document.getElementById("main");
            var css = document.getElementById("stylesheet");


            if (header != null) {
                header.innerHTML = HEADR;
            }


            if (main != null) {
                main.innerHTML = BODY;
            }


            if (css != null) {
                css.href = "IOS6.css";
            }

        }

    }

};