var timer_speed;
var rot=0;
var time_clear;
var modal = document.getElementById('modalPopup');
var btn = document.getElementsByClassName("btn");
var img = document.getElementsByClassName("popup__close")[0];
var body = document.querySelector("body");


function timer_start(){
    closePopup();
    clearInterval(timer_speed);
    timer_speed=setInterval(function () {
        action(3);
    },10);
    time_clear = setTimeout(function() {
        stop_timer();
    }, Math.floor(Math.random() * (5000 - 1000) + 1000));
}

function stop_timer(){
    clearInterval(timer_speed);
    clearTimeout(time_clear);
    activePopup();
}

function action (A){
    rot=rot+A;
    document.getElementById('timer_int').style.transform="rotate("+rot+"deg)";
}

btn.onclick = activePopup;
img.onclick = closePopup;

window.onclick =function(event) {
    if (event.target === modal) {
        closePopup();
    }
};

function activePopup() {
    modal.style.display = "block";
}

function closePopup() {
    modal.style.display = "none";
    body.style.marginRight = "auto";
}
