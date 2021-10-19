var preloadTime;

preloader()

function preloader() {
  document.getElementById("body").style.overflow="hidden";
  preloadTime = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("iaspreloader").style.display = "none";
  document.getElementById("body").style.overflow="visible";
}
