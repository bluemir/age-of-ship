define([], function(){
	function Engine(){
		this.stat = {
			power: 0
		}
		this.spec = {
			maxPower : 1,
			weight : 1,
			acc : 0.5
		}
	}
	Engine.prototype.powerUp = function(dt){
		this.stat.power += this.spec.acc * dt / 1000;
		if(this.stat.power > this.spec.maxPower){
			this.stat.power = this.spec.maxPower
		}
	}
	Engine.prototype.powerDown = function(dt){
		this.stat.power -= this.spec.acc * dt / 1000;;
		if(this.stat.power < 0) {
			this.stat.power = 0;
		}
	}
	return Engine;

});
