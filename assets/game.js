require(["entity/ship", "entity/sea","view", "controller", "entity/sun", "dashboard"], function(Ship, Sea, view, controller, Sun, Dashboard){
	var ship = new Ship();
	var sea = new Sea();
	var sun = new Sun();

	controller.control(ship);

	var dashboard = new Dashboard();

	dashboard.bind(ship);

	view.startRender();
});

