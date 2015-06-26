define(["keypress"], function(keypress){
	//TODO keyconfig by user
	var keyconfig = {
		forward : "w",
		backward: "s",
		right: "d",
		left: "a"
	}

	var listener = new keypress.Listener();
	var keys = {
		forward : new Key(keyconfig.forward),
		backward : new Key(keyconfig.backward),
		right : new Key(keyconfig.right),
		left: new Key(keyconfig.left)
	}

	function Key(key){
		this.isPressed = false;

		var that = this;
		listener.register_combo({
			keys: key,
			on_keyup: function(){
				that.isPressed = false;
			},
			on_keydown: function(){
				that.isPressed = true;
			}
		});
	}
	return keys;
});
