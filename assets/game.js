require(["entity/ship", "entity/sea","view", "controller", "entity/sun"], function(Ship, Sea, view, controller, Sun){
	var ship = new Ship();
	var sea = new Sea();
	var sun = new Sun();
	
	controller.control(ship);
	
	view.startRender();
});

