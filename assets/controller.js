define(["three", "view", "keys", "event"], function(T, view, keys, event){
	var target = null;
	var camera = null;

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

	var look = {
		tilt : T.Math.degToRad(45),
		pan :  T.Math.degToRad( 0)
	}
	event.on("app.mousemove", function (delta) {
		if(camera == null) return;

		look.tilt += delta.y * 0.001;

		if (look.tilt < 0.0001) {
			look.tilt = 0.0001;
		} else if ( look.tilt > Math.PI/2) {
			look.tilt = Math.PI/2;
		}

		look.pan += delta.x * 0.001;

		camera.position.x =  25 * Math.cos(look.tilt) * Math.sin(look.pan);
		camera.position.y = -25 * Math.cos(look.tilt) * Math.cos(look.pan);
		camera.position.z =  25 * Math.sin(look.tilt);

		camera.up.set(0,0,1);

		camera.lookAt(new T.Vector3(0,0,0));
	});

	return {
		control : function(entity){
			target = entity;
			//TODO camera always look shorter then map load
			camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50);

			entity.mesh.add(camera);
			camera.position.y = -25 * Math.cos(look.tilt);
			camera.position.z =  25 * Math.sin(look.tilt);
			camera.lookAt(new T.Vector3(0,0,0));

			view.setCamera(camera);
		}
	}
});
