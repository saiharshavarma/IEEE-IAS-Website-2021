var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.02em solid #fff}";
    document.body.appendChild(css);
};

$(document).ready(function () {
    var doc = $(document).height();
    var win = $(window).height();

    var about = ($("#About").offset().top / (doc - win)) * 100;

    var domain = ($("#Domain").offset().top / (doc - win)) * 100;
    domain -= about;

    var blogs = ($("#Blogs").offset().top / (doc - win)) * 100;
    blogs -= about + domain;

    var events = ($("#Events").offset().top / (doc - win)) * 100;
    events -= about + domain + blogs;

    if ($(window).width() < 575 && win < 850) {
        document.getElementById("board-change-1").href = "#M-Board";
        document.getElementById("board-change-2").href = "#M-Board";
        var board = ($("#M-Board").offset().top / (doc - win)) * 100;
    } else {
        document.getElementById("board-change-1").href = "#Board";
        document.getElementById("board-change-2").href = "#Board";
        var board = ($("#Board").offset().top / (doc - win)) * 100;
    }
    board -= about + domain + blogs + events - 1;

    var contact = ($("#Contact").offset().top / (doc - win)) * 100;
    var end = contact;
    contact -= about + domain + blogs + events + board;

    $(".vertical-progress-bar ul li:nth-child(2)").css(
        "height",
        Math.floor(about) + "%"
    );
    $(".vertical-progress-bar ul li:nth-child(3)").css(
        "height",
        Math.floor(domain) + "%"
    );
    $(".vertical-progress-bar ul li:nth-child(4)").css(
        "height",
        Math.floor(blogs) + "%"
    );
    $(".vertical-progress-bar ul li:nth-child(5)").css(
        "height",
        Math.floor(events) + "%"
    );
    $(".vertical-progress-bar ul li:nth-child(6)").css(
        "height",
        Math.floor(board) + "%"
    );
    $(".vertical-progress-bar ul li:nth-child(7)").css(
        "height",
        Math.floor(contact) + "%"
    );

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var value = (scroll / (doc - win)) * 100;
        if (end < value) value = end;
        $("ul .line").css("height", value + "%");
    });
});
