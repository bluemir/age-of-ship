require(["entity/ship", "entity/sea","view", "controller", "entity/sun"], function(Ship, Sea, view, controller, Sun){
	var ship = new Ship();
	var sea = new Sea();
	var sun = new Sun();

	controller.control(ship);

	view.startRender();

	document.addEventListener("click", function(){
		pointlock(document.body);
	});
	function pointlock(element){
		element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
		element.requestPointerLock();

		// Ask the browser to release the pointer
		document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
		//document.exitPointerLock();
	}
});

