require(["entity/ship", "view", "controller"], function(Ship, view, controller){
	var ship = new Ship();
	
	controller.control(ship);
	
	view.startRender();
});

