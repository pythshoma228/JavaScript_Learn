<<<<<<< HEAD
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
=======
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
>>>>>>> bec95967d3af91dcb5524a944d67e8bd82811c59
console.log("hello");