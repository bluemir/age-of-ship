uniform vec3 color;

//TODO common process

uniform sampler2D waveNoize;
uniform vec2 waveDirection;
uniform float wavePeriod;
uniform float waveSize;

varying vec2 coord;

void main() {
	//TODO 5 times
	coord = uv + waveDirection * wavePeriod;
	if ( coord.x >  1.0){
		coord.x -= floor(coord.x);
	}
	if ( coord.y >  1.0){
		coord.y -= floor(coord.y);
	}
	vec3 wavePosition = position;
	//wavePosition.z += coord.x;
	wavePosition.z += (texture2D(waveNoize, coord).x - 0.5) * waveSize;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(wavePosition, 1.0);
}
