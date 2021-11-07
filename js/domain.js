var looper;
var degrees = 0;

function rotateAnimation(el, speed) {
    clearTimeout(looper);
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

    looper = setTimeout("rotateAnimation('" + el + "'," + speed + ")", speed);
    degrees++;
    if (degrees > 359) degrees = 1;
}

function stoprotate() {
    clearTimeout(looper);
}

function stoprotate() {
    if (looper) clearTimeout(looper);
}

function mydFunction() {
    document.getElementById("dpara").innerHTML =
        "IEEE-IAS is a great platform for students to hone their Technical, Leadership skills & gain experience in organizing events and where holistic development takes place. Our chapter work on several important domains.";
}
function mydFunction1() {
    document.getElementById("dpara").innerHTML =
        "The one-stop place to put our pen down and creativity up. This domain is the back of the weekly blogs, DYK's, Newsletters and many more. It's the saving grace in true essence.";
}
function mydFunction2() {
    document.getElementById("dpara").innerHTML =
        "Creative minds come together and produce starling posters and videos. This artistic contributions will make our projects more intellectual and colourful.";
}

function mymFunction() {
    document.getElementById("mpara").innerHTML =
        "IEEE-IAS is a great platform for students to hone their Technical, Leadership skills & gain experience in organizing events and where holistic development takes place. Our chapter work on several important domains.";
}
function mymFunction1() {
    document.getElementById("mpara").innerHTML =
        "The one-stop place to put our pen down and creativity up. This domain is the back of the weekly blogs, DYK's, Newsletters and many more. It's the saving grace in true essence.";
}
function mymFunction2() {
    document.getElementById("mpara").innerHTML =
        "Creative minds come together and produce starling posters and videos. This artistic contributions will make our projects more intellectual and colourful.";
}
