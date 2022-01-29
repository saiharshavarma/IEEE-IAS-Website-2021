function exBoard() {
    document.getElementsByClassName("mySwiperex")[0].style.display = "block";
    document.getElementsByClassName("mySwipernew")[0].style.display = "none";
    document.getElementById("boardbtn1").style.color = "#0c8a2f";
    document.getElementById("boardbtn2").style.color = "#FFF";
}

function newBoard() {
    document.getElementsByClassName("mySwiperex")[0].style.display = "none";
    document.getElementsByClassName("mySwipernew")[0].style.display = "block";  
    document.getElementById("boardbtn1").style.color = "#FFF";
    document.getElementById("boardbtn2").style.color = "#0c8a2f"; 
}