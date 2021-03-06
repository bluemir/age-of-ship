define(["utils", "three", "event"], function(utils, T, event){
	var canvas = utils.$("#game");

	var renderer = new T.WebGLRenderer({canvas : canvas, antialias: true, alpha: true});

	renderer.setSize(window.innerWidth, window.innerHeight);

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	event.on("window.resize", function(size){
		renderer.setSize(size.width, size.height);
	});

	return {
		render : function(scene, camera) {
			renderer.render(scene, camera);
		}
	}

});
