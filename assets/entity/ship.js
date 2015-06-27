define(["scene", "three", "event"], function(scene, T, event){
	function Ship(){
		//TODO load from loader
		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
		this.mesh = new T.Mesh(geometry, material);

		this.mesh.position.z = 1;

		scene.add(this.mesh);

		this.stat = {
			speed : 0,
			turn : 0.05,
			heading : new T.Vector3(0, 1, 0)
		};

		var that = this;
		event.on("app.frame", function(dt){
			that.mesh.position.x += dt * that.stat.speed * that.stat.heading.x;
			that.mesh.position.y += dt * that.stat.speed * that.stat.heading.y;
		});
	}
	Ship.prototype.forward = function(dt) {
		this.stat.speed += dt * 0.000005;
		if(this.stat.speed > 0.005) {
			this.stat.speed = 0.005;
		}
	}
	Ship.prototype.backward = function(dt) {
		this.stat.speed -= dt * 0.000005;
		if(this.stat.speed < 0) {
			this.stat.speed = 0;
		}
	}
	Ship.prototype.turnRight = function(dt) {
		var amount = dt * this.stat.turn * Math.PI /100;

		this.stat.heading.applyAxisAngle(new T.Vector3(0, 0, 1), -amount);
		this.mesh.rotateOnAxis(new T.Vector3(0, 0, 1), -amount);
	}
	Ship.prototype.turnLeft = function(dt) {
		var amount = dt * this.stat.turn * Math.PI /100;

		this.stat.heading.applyAxisAngle(new T.Vector3(0, 0, 1), amount);
		this.mesh.rotateOnAxis(new T.Vector3(0, 0, 1), amount);
	}
	return Ship;
});
