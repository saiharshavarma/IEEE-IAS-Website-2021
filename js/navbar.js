function HamburgerToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") x.className += " responsive";
    else x.className = "topnav";
}

$(".topnav a").on("click", function () {
    $(".topnav").removeClass("responsive");
});

window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    // document.getElementById("myBar").style.width = scrolled + "%";
}
