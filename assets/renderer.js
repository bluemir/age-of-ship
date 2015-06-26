define(["utils", "three", "event"], function(utils, T){
	var canvas = utils.$("#game");

	var renderer = new T.WebGLRenderer({canvas : canvas, antialias: true, alpha: true});

	renderer.setSize(window.innerWidth, window.innerHeight);
	
	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	return {
		render : function(scene, camera) {
			renderer.render(scene, camera);
		}
	}
	
});
