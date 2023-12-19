document.addEventListener("DOMContentLoaded", function() {
    var myElement = document.querySelector('.background');
    const hexCode = rgbToHex(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    function rgbToHex(r, g, b) {return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);}
    myElement.setAttribute('style', 'background-color:' + hexCode + ';');
    document.getElementById("output").innerHTML = hexCode;});