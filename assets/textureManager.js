define(["three"], function(T){
	function TextureManager(){

	}
	TextureManager.prototype.get = function(name){
		//TODO replace Improve code
		return T.ImageUtils.loadTexture("/assets/"+name);
	}

	return new TextureManager();
})
