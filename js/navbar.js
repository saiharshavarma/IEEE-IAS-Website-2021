function HamburgerToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
    x.className += " responsive";
  else 
    x.className = "topnav"; 
}

$('.topnav a').on("click", function(){
  $('.topnav').removeClass('responsive');
});