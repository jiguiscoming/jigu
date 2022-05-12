let verticalUnderLine = document.getElementById("vertical_underline");

let verticalMenus = document.querySelectorAll("nav a");

verticalMenus.forEach(menu=>menu.addEventListener("click",(e)=>verticalIndicator(e)))

function verticalIndicator(e) {
    verticalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    verticalUnderLine.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}