define(["scene", "three"], function(scene, T){
	function Ship(){
		//TODO load from loader
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
		this.mesh = new T.Mesh(geometry, material);

		this.mesh.position.z = 1;

		scene.add(this.mesh);

		this.stat = {
			speed : 0.005
		};
	}
	Ship.prototype.forward = function(dt) {
		this.mesh.position.y += dt * this.stat.speed;
	}
	Ship.prototype.backward = function(dt) {
		this.mesh.position.y -= dt * this.stat.speed;
	}
	Ship.prototype.turnRight = function(dt) {
		console.log("ship turn Right");
	}
	Ship.prototype.turnLeft = function(dt) {
		console.log("ship turn Left");
	}
	return Ship;
});
