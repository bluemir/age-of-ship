(function(global){
	require.config({
		baseUrl : "/assets",
		paths : {
			three : "/lib/three.js/three",
			keypress : "/lib/Keypress/keypress",
			EventEmitter : "/lib/eventemitter2/lib/eventemitter2"
			//text : "/lib/text/text"
		},
		shim: {
			three: {
				exports: 'THREE'
			},
		}
	});
})(this);
