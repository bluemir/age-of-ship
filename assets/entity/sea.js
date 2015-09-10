define(["three", "scene", "event", "entity/zone", "textureManager"], function(T, scene, event, Zone, TextureManager){
	function Sea() {
		var zone = new Zone();

		var mng = new MeshManager();

		mng.add(zone.current);

		event.on("user.move", function(pos){
			zone.trace(pos);
		});

		event.on("zone.changed", function(zone){
			//TODO LOAD DATA
			//TODO MAKE MESH
			//TODO REGISTER MAP TREE
			//TODO ATTACH TO SCENE
			//TODO REMOVE UNUSED OBJECT
			mng.add(zone);
			mng.cut(zone);
		});
	}
	function MeshManager(){
		this.meshs = {}
	}
	MeshManager.prototype.add = function(zone){
		return this._around(zone).filter(not(this.exist), this).map(this._append, this);
	}
	MeshManager.prototype.cut = function(zone){
		return Object.keys(this.meshs).map(this._unkey).filter(function(e){
			if(Math.abs(zone.x - e.x) > 2){
				return true;
			}
			if(Math.abs(zone.y - e.y) > 2) {
				return true;
			}
			return false;
		}).map(this._remove, this);
	}
	MeshManager.prototype.exist = function(zone) {
		return !!this.meshs[this._key(zone)];
	}
	MeshManager.prototype._append = function(zone) {
		this.meshs[this._key(zone)] = loadArea(zone);
		scene.add(this.meshs[this._key(zone)]);
		return zone;
	}
	MeshManager.prototype._remove = function(zone) {
		scene.remove(this.meshs[this._key(zone)]);
		delete this.meshs[this._key(zone)];

		return zone;
	}
	MeshManager.prototype._around = function(zone) {
		var index = [-1, 0, 1];
		var arr = [];
		index.forEach(function(dx) {
			index.forEach(function(dy) {
				arr.push({ x : zone.x + dx, y : zone.y + dy});
			});
		});
		return arr;
	}
	MeshManager.prototype._key = function(zone) {
		return zone.x + ":" + zone.y;
	}
	MeshManager.prototype._unkey = function(str) {
		var z = str.split(":");
		return {x: parseInt(z[0]), y: parseInt(z[1])};
	}
	function not(func){
		return function(){
			return !func.apply(this, arguments);
		}
	}


	function loadArea(zone) {
		var geometry = new T.PlaneBufferGeometry(50, 50, 32);
		//var material = new T.MeshPhongMaterial({color: 0x0000ff});

		var texture = TextureManager.get("entity/wave_height.jpg");
		//TODO Displacement map

		/*
		var shader = T.normalDisplacementShader;
		console.log(T.ShaderLib);
		var uniforms = T.UniformsUtils.clone(shader.uniforms);

		uniforms["enableDisplacement"].value = true;
		uniforms["enableDiffuse"].value = true;
		uniforms["tDisplacement"].value = texture;
		uniforms["tDiffuse"].value = texture;
		uniforms["uDisplacementScale"].value = 50;

		var parameters = {
			fragmentShader: shader.fragmentShader,
			vertextShader: shader.vertextShader,
			uniforms: uniforms,
			lights: true,
			wireframe: false
		};*/

		//var material = new T.ShaderMaterial(parameters);

		var material = new T.MeshPhongMaterial({color: 0x0000ff, map : texture});
		var mesh = new T.Mesh(geometry, material);

		mesh.position.set(50*zone.x+25, 50*zone.y+25, 0);

		return mesh;
	}
	return Sea;
});
