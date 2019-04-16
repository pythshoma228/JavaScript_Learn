window.onload = init();

    function init() {
    var ball = document.getElementById('root');

    ball.onclick = function(eventObj) {

    var ball = document.getElementById("root");
    ball = eventObj.target;

    ball.setAttribute("class", "style");
    setTimeout(() => ball.removeAttribute("class", "style"), 2000)

    }
}