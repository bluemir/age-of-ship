define(["scene", "three", "event"], function(scene, T, event){
	function Sun(){
		var ambient = new T.AmbientLight(0xffffff);
		ambient.color.setHSL(0.1, 0.3, 0.01);

		var directional = new T.DirectionalLight(0xffffff, 0.9);
		directional.position.set(0, 0, 5);

		this.mesh = new T.Object3D();
		this.mesh.add(ambient);
		this.mesh.add(directional);
		
		scene.add(this.mesh);

		this.animateTime = 0;

		var that = this;
		event.on("app.frame", function(dt){
			that.animateTime = (that.animateTime + dt) % 15000;
			var theta = that.animateTime/15000 * 2 * Math.PI;

			if(theta > Math.PI) {
				directional.color.setHSL(0, 0, 0)
				ambient.color.setHSL(0.1, 0.3, (0.03 + Math.sin(theta)/40));
			} else {
				directional.color.setHSL(0, 0, Math.sin(theta))
				ambient.color.setHSL(0.1, 0.3, 0.03);
			}
			that.mesh.position.set(Math.cos(theta)* 100, 0, Math.sin(theta) * 100)
		});
		
	}
	return Sun;
})
