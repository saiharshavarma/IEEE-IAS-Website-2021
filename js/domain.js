var looper;
var degrees = 0;

function rotateAnimation(el, speed) {
    var elem = document.getElementById(el);
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees + "deg)";
    } else {
        elem.style.transform = "rotate(" + degrees + "deg)";
    }

    looper = setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);
    degrees++;
    if (degrees > 359)
        degrees = 1;
}

function stoprotate() {
    clearTimeout(looper);
}

function stoprotate() {
    if (looper)
        clearTimeout(looper);
}

function myFunction() {
    document.getElementById('para').innerHTML = "IEEE-IAS is a great platform for<br> students to hone their Technical,<br> Leadership skills & gain experience in<br>organizing events and where holistic<br> development takes place. Our chapter<br> work on several important domains.";
}
function myFunction1() {
    document.getElementById('para').innerHTML = "The one-stop place to put our pen<br> down and creativity up. This domain<br>is the back of the weekly blogs, DYK's,<br>Newsletters and many more. It's the<br> saving grace in true essence.";
    ;
}
function myFunction2() {
    document.getElementById('para').innerHTML = "Creative minds come together and<br> produce starling posters and videos.<br> This artistic contributions will make<br>our projects more intellectual and<br>  colourful.";
    ;
}