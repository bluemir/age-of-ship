define([
	"three",
	"scene",
	"event",
	"entity/zone",
	"textureManager",
	"shader/loader"
],
function(T, scene, event, Zone, TextureManager, ShaderLoader){
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
	var waveMaterial = null;
	Sea.ready = function(){
		var defer = Q.defer();
		waveMaterial = new T.ShaderMaterial({
			vertexShader : ShaderLoader.get("wave.vs"),
			fragmentShader : ShaderLoader.get("wave.fs"),
			uniforms : THREE.UniformsUtils.merge([
				//THREE.UniformsLib['lights'],
				{
					// UniformUtils.merge dosen't work with texture.
					// See https://github.com/mrdoob/three.js/issues/3393
					waveNoize : {type : "t", value: null},
					waveDirection : {type : "v2", value : new T.Vector2(1,0)},
					wavePeriod : {type : "f", value : 0.5},
					waveSize : {type : "f", value : 1}
				}
			])

		});
		waveMaterial.uniforms.waveNoize.value = TextureManager.get("entity/wave_texture.jpg");

		defer.resolve();
		return defer.promise;
	}
	event.on("app.frame", function(dt){
		//TODO update period
		waveMaterial.uniforms.wavePeriod.value += dt/80000;
	});
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
		var geometry = new T.PlaneBufferGeometry(50, 50, 128, 128);
		var mesh = new T.Mesh(geometry, waveMaterial);

		mesh.position.set(50*zone.x+25, 50*zone.y+25, 0);

		return mesh;
	}

	return Sea;
});
