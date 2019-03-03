window.onload = init();

function init() {

	var cube = document.getElementById('cube');

	function ShowCoords() {
		var cube.onmouse = ShowAnswer;
	}

	function ShowAnswer(eventObj) {
		var cube = eventObj.target;
		var x = event.clientX;
		var y = eevnt.clientY;
		console.log(x, y);
	}
}
console.log("hello");