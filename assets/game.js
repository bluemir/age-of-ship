require([
		"entity/ship",
		"entity/sea",
		"view",
		"controller",
		"entity/sun",
		"dashboard",
		"shader/loader"
], function(Ship, Sea, view, controller, Sun, Dashboard, ShaderLoader){
	Q.fcall(load([
		ShaderLoader.ready
	])).then(load([
		Sea.ready
	])).then(function(){
		var ship = new Ship();
		var sea = new Sea();
		var sun = new Sun();

		controller.control(ship);

		var dashboard = new Dashboard();

		dashboard.bind(ship);

		view.startRender();
	});

	function load(modules){
		return function _load(){
			return Q.all(modules.map(function(readyFunc){
				return Q.fcall(readyFunc);
			}));
		}
	}

});

