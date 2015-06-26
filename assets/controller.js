define(["three", "view", "keys", "event"], function(T, view, keys, event){
	var target = null;

	event.on("app.render", function (dt){
		if (target == null){
			return;
		}
		var isMoving = false;
		if (keys.forward.isPressed) {
			console.log("forward");
			target.forward(dt);
			isMoving = true;
		} 
		if (keys.backward.isPressed) {
			console.log("backward");
			target.backward(dt);
			isMoving = true;
		}
		if (keys.right.isPressed) {
			console.log("right");
			target.mesh.position.x += 1;
			isMoving = true;
		}
		if (keys.left.isPressed) {
			console.log("left");
			target.mesh.position.x -= 1;
			isMoving = true;
		}


		if(isMoving) {
			event.emit("user.move", target.mesh.position);
		}
	});
	return {
		control : function(entity){
			target = entity;
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			entity.mesh.add(camera)
			camera.position.z = 5;
			camera.position.y = -5;
			camera.lookAt(new T.Vector3(0,0,0));

			view.setCamera(camera);
		}
	}
});
