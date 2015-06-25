define(["three", "view"], function(T, view){
	return {
		control : function(entity){
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			entity.mesh.add(camera)
			camera.position.z = 5;
			camera.position.y = -5;
			camera.lookAt(new T.Vector3(0,0,0));

			view.setCamera(camera);
		}
	}
});
