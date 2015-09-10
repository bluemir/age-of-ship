define(["EventEmitter", "utils"], function(Emitter, utils){
	var appEvent = new Emitter();

	var isPointerLock = false;

	window.addEventListener("resize", function(e) {
		appEvent.emit("window.resize", e);
	});
	window.addEventListener("mousemove", function(e) {
		appEvent.emit("window.mousemove", e);
		if(isPointerLock) {
			appEvent.emit("app.mousemove", {x : e.movementX, y : e.movementY});
		}
	});
	//http://www.html5rocks.com/en/tutorials/pointerlock/intro/
	document.addEventListener('pointerlockchange', changeCallback, false);
	document.addEventListener('mozpointerlockchange', changeCallback, false);
	document.addEventListener('webkitpointerlockchange', changeCallback, false);
	function changeCallback(e){
		isPointerLock = !!document.pointerLockElement;
		appEvent.emit("window.pointerlock", document.pointerLockElement ? "lock" : "unlock");
	}

	document.addEventListener("click", function(){
		utils.pointlock(document.body);
	});

	return appEvent;
});
