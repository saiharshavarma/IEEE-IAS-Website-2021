function HamburgerToggle() {
  $('.topnav').addClass('responsive');
}

// $('#myTopnav a').on("click", () => {
//   $('#myTopnav').hide();
// });

// $('.topnav .icon').on('click', function () {
//   $('.topnav').addClass('responsive');
// });

$('.topnav a').on("click", function(){
  $('.topnav').removeClass('responsive');
});