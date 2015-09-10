define(["utils", "event"], function(utils, event){
	function Dashboard(){
		this.$ = utils.$("#dashboard");
		event.on("app.frame", this.onFrame.bind(this));
	}
	Dashboard.prototype.bind = function(ship){
		this.ship = ship;
		this.$.style.visibility = "visible";
	}
	Dashboard.prototype.onFrame = function(){
		this.$.querySelector(".power").innerHTML = this.ship.engine.stat.power;
		this.$.querySelector(".speed").innerHTML = this.ship.stat.speed;
		this.$.querySelector(".heading").innerHTML = this.ship.stat.heading.toArray();
	}
	return Dashboard;
});
