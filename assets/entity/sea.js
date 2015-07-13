define(["three", "scene", "event", "entity/zone"], function(T, scene, event, Zone){
	function Sea() {
		var zone = new Zone();
		var meshs = {};

		scene.add(loadArea(zone.current));

		event.on("user.move", function(pos){
			zone.trace(pos);
		});

		event.on("zone.changed", function(zone){
			console.log(zone);
			//TODO CHECK REQUIRE TO LOAD AREA

			//TODO LOAD DATA
			//TODO MAKE MESH
			//TODO REGISTER MAP TREE
			//TODO ATTACH TO SCENE
			scene.add(loadArea(zone));
			//TODO REMOVE UNUSED OBJECT
		});
	}
	function loadArea(zone) {
		var geometry = new T.PlaneBufferGeometry(50, 50, 32);
		var material = new T.MeshPhongMaterial({color: 0x0000ff});
		var mesh = new T.Mesh(geometry, material);

		mesh.position.set(50*zone.x+25, 50*zone.y+25, 0);

		return mesh;
	}
	return Sea;
});
