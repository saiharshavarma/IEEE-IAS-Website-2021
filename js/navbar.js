function HamburgerToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") x.className += " responsive";
    else x.className = "topnav";
}

$(".topnav a").on("click", function () {
    $(".topnav").removeClass("responsive");
});

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Navbar links turn active on scrolling 
const sections = document.querySelectorAll(".scroll-section");
const Lia = document.querySelectorAll(".navbar .topnav li a");
window.onscroll = () => {
    myFunction();
    var current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight= section.offsetHeight;
        if (pageYOffset >= sectionTop - (sectionHeight / 4)) 
            current = section.getAttribute("id"); 
    });

    Lia.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) 
            a.classList.add("active");        
    });
};
