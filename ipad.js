
canvas.addEventListener("touchstart", touchStart, false);
//element.addEventListener("touchmove", touchMove, false);
//element.addEventListener("touchend", touchEnd, false);
//element.addEventListener("touchcancel", touchCancel, false);

function touchStart () {
player.y -= 1;
}

function touchEnd (event) {
player.z = 100;
}
