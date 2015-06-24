require(["entity/ship", "entity/sea","view", "controller"], function(Ship, Sea, view, controller){
	var ship = new Ship();
	var sea = new Sea();
	
	controller.control(ship);
	
	view.startRender();
});

