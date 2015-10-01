define(["utils", "three"], function(utils, T){

	var src = [
		"wave.fs",
		"wave.vs"
	]

	var _data = null;

	function _load(name){
		return utils.ajax.get("/assets/shader/" + name + ".glsl")
	}
	return {
		ready : function(){
			_data = {};
			return Q.all(src.map(function(e){
				return _load(e).then(function(data){
					data = data.replace(/{{(.+)}}/, function(match, name){
						if(!T.ShaderChunk[name]){
							console.warn("there is no Three.ShaderChuck[" + name + "]");
							return "";
						}
						return T.ShaderChunk[name];
					});

					_data[e] = data;
					return data;
				});
			}))
		},
		get : function(name){
			return _data[name];
		}
	}
});
