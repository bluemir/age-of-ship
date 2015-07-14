define(["scene", "renderer", "event"], function (scene, renderer, event) {
	var camera;

	function renderLoop(){
		var prevTime = Date.now();
		function loop(){
			var currentTime = Date.now();
			var dt = currentTime - prevTime;
			prevTime = currentTime;

			renderer.render(scene, camera);
			event.emit("app.render", dt);
			event.emit("app.frame", dt);

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
