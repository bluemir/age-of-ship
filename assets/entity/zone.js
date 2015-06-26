define(["event"], function(event){
	function Zone(){
		var current = {
			x :0,
			y :0
		};
		event.on("user.move", function(pos){
			var isChanged = false;
			if (Math.floor(pos.x / 50) != current.x){
				current.x = Math.floor(pos.x / 50);
				isChanged = true;
			}
			if (Math.floor(pos.y / 50) != current.y){
				current.y = Math.floor(pos.y / 50);
				isChanged = true;
			}
			if (isChanged){
				event.emit("zone.changed", current);
			}
		});
	}
	return Zone;
});
