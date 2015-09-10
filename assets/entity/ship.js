define(["scene", "three", "event", "entity/ship/engine"], function(scene, T, event, Engine){
	function Ship(){
		//TODO load from loader
		var geometry = new THREE.BoxGeometry(2, 5, 1);
		var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
		this.mesh = new T.Mesh(geometry, material);

		this.mesh.position.z = 1;

		scene.add(this.mesh);

		this.stat = {
			speed : 0,
			weight : 100,
			heading : new T.Vector3(0, 1, 0)
		};
		this.spec = {
			weight : 10,
			cargo : 1,
			turn : 0.05,
			resistance : 100
		};
		this.engine = new Engine();

		event.on("app.frame", this.onFrame.bind(this));
	}
	Ship.prototype.forward = function(dt) {
		this.engine.powerUp(dt);
	}
	Ship.prototype.backward = function(dt) {
		this.engine.powerDown(dt);
	}
	Ship.prototype.turnRight = function(dt) {
		var amount = dt * this.spec.turn * Math.PI /100;

		this.stat.heading.applyAxisAngle(new T.Vector3(0, 0, 1), -amount);
		this.mesh.rotateOnAxis(new T.Vector3(0, 0, 1), -amount);
	}
	Ship.prototype.turnLeft = function(dt) {
		var amount = dt * this.spec.turn * Math.PI /100;

		this.stat.heading.applyAxisAngle(new T.Vector3(0, 0, 1), amount);
		this.mesh.rotateOnAxis(new T.Vector3(0, 0, 1), amount);
	}
	Ship.prototype.onFrame = function(dt){
		this.stat.speed += (this.engine.stat.power - this.spec.resistance * this.stat.speed) / this.stat.weight * dt/ 1000;

		this.mesh.position.x += dt * this.stat.speed * this.stat.heading.x;
		this.mesh.position.y += dt * this.stat.speed * this.stat.heading.y;
		//TODO detach
		event.emit("user.move", this.mesh.position);
	}
	return Ship;
});
