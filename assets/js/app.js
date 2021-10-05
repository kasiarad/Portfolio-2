
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
icon.onclick = function () {

    if (mySong.paused) {
        mySong.play();
        icon.src = "/assets/img/images/pause.png"
    }
    else {
        mySong.pause();
        icon.src = "/assets/img/images/play.png"
    }
}