define(["three", "scene"], function(T, scene){
	function Sea() {
		var geometry = new T.PlaneBufferGeometry( 25, 20, 32 );
		var material = new T.MeshPhongMaterial({color: 0x0000ff, side: T.DoubleSide});
		this.mesh = new T.Mesh(geometry, material);
		
		scene.add(this.mesh);
	}
	return Sea;
});
