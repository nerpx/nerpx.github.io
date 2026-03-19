function changeIframeSrc() {
            var newUrl = document.getElementById('urlInput').value;
            var iframeElement = document.getElementById('myIframe');
            iframeElement.src = newUrl;
        }