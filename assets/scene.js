define(["three"], function(T, utils){
	var scene = new THREE.Scene();

	var ambient = new THREE.AmbientLight( 0xffffff );
	ambient.color.setHSL( 0.1, 0.3, 0.2 );
	scene.add( ambient );

	return scene;
});
