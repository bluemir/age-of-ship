define(["event"], function(event){
	var __ = {
		block : 50
	}
	function Zone(){
		this.current = {
			x :0,
			y :0
		};
	}
	Zone.prototype.trace = function(pos) {
		var isChanged = false;
		if (Math.floor(pos.x / __.block) != this.current.x){
			this.current.x = Math.floor(pos.x / __.block);
			isChanged = true;
		}
		if (Math.floor(pos.y / __.block) != this.current.y){
			this.current.y = Math.floor(pos.y / __.block);
			isChanged = true;
		}
		if (isChanged){
			event.emit("zone.changed", this.current);
		}
	}
	return Zone;
});
