define(["scene", "renderer"], function (scene, renderer) {
	var camera;

	function renderLoop(){
		var prevTime = Date.now();
		function loop(){
			var currentTime = Date.now();
			var dt = currentTime - prevTime;
			prevTime = currentTime;

			renderer.render(scene, camera);
			requestAnimationFrame(loop);
		};	
		loop();
	}

	return {
		startRender: function(){
			if(camera) {
				renderLoop();
			}
		},
		stopRender: function(){
			console.err("Not Impelment")
		},
		setCamera: function(c){
			camera = c;
		}
	}
});
