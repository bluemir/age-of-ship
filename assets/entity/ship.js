define(["scene", "three"], function(scene, T){
	function Ship(){
		//TODO load from loader
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
		this.mesh = new T.Mesh(geometry, material);

		scene.add(this.mesh);
	}
	return Ship;
});
