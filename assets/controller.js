define(["three", "view", "keys", "event"], function(T, view, keys, event){
	var target = null;

	event.on("app.render", function (dt){
		if (target == null){
			return;
		}
		if (keys.forward.isPressed) {
			target.forward(dt);
		} 
		if (keys.backward.isPressed) {
			target.backward(dt);
		}
		if (keys.right.isPressed) {
			target.turnRight(dt);
		}
		if (keys.left.isPressed) {
			target.turnLeft(dt);
		}
	});
	return {
		control : function(entity){
			target = entity;
			var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

			entity.mesh.add(camera)
			camera.position.z = 15;
			camera.position.y = -25;
			camera.lookAt(new T.Vector3(0,0,0));

			view.setCamera(camera);
		}
	}
});
