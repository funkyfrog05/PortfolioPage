var navlist = document.getElementById("navlist");
var sticky = navlist.offsetTop;
var colorArray = ["yellow","blue","red","salmon","white","purple"];
var counter = 0;

/* Function to stick the nav bar */
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navlist.classList.add("sticky")
    }
    else {
        navlist.classList.remove("sticky");
    }
}

function changeColor() {
    color = colorArray[counter]
    document.body.style.background = color;
    counter == colorArray.length ? counter = 0 : counter +=1;
}