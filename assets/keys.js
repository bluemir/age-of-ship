define(["keypress", "EventEmitter"], function(keypress, Emitter){
	//TODO keyconfig by user
	var keyconfig = {
		forward : "w",
		backward: "s",
		right: "d",
		left: "a",
		ship_view: "1",
		overview: "2"
	}

	var listener = new keypress.Listener();
	var keys = {
		forward : new Key(keyconfig.forward),
		backward : new Key(keyconfig.backward),
		right : new Key(keyconfig.right),
		left: new Key(keyconfig.left),
		ship_view: new FunctionKey(keyconfig.ship_view),
		overview: new FunctionKey(keyconfig.overview)
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

	function FunctionKey(key){
		var that = this;
		this.emitter = new Emitter();
		listener.register_combo({
			keys: key,
			on_keydown: function(){
				that.emitter.emit("keydown", null);
			},
			prevent_repeat: true
		});
	}
	FunctionKey.prototype.on = function(){
		this.emitter.on.apply(this.emitter, arguments);
	}
	return keys;
});
