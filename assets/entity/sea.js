define(["three", "scene", "event", "entity/zone"], function(T, scene, event, Zone){
	function Sea() {
		var geometry = new T.PlaneBufferGeometry( 50, 50, 32 );
		var material = new T.MeshPhongMaterial({color: 0x0000ff});
		this.mesh = new T.Mesh(geometry, material);
		
		scene.add(this.mesh);

		new Zone();

		event.on("zone.changed", function(zone){
			console.log(zone);
		});
	}
	return Sea;
});
