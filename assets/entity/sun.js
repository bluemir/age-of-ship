define(["scene"], function(scene){
	function Sun(){
		var ambient = new T.AmbientLight(0xffffff);
		ambient.color.setHSL(0.1, 0.3, 0.2);

		var directional = new T.DirectionalLight( 0xffffff, 0.8 );
		directional.position.set( 1, 1, 0 );

		this.mesh = new T.Object3D();
		this.mesh.add(ambient);
		this.mesh.add(directional);
		
		scene.add(this.mesh);
	}
	return Sun;
})
