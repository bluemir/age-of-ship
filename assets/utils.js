define(function(){
	var utils = {};

	utils.$ = document.querySelector.bind(document);

	utils.pointlock = function pointlock(element){
		element.requestPointerLock =
			element.requestPointerLock ||
			element.mozRequestPointerLock ||
			element.webkitRequestPointerLock;
		element.requestPointerLock();

		// Ask the browser to release the pointer
		document.exitPointerLock =
			document.exitPointerLock ||
			document.mozExitPointerLock ||
			document.webkitExitPointerLock;
		//document.exitPointerLock();
	}

	return utils;
})
