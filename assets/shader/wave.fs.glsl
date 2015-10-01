precision highp float;

uniform sampler2D waveNoize;
uniform sampler2D texture;

varying vec2 coord;

void main() {
	//gl_FragColor = vec4(coord.x, coord.y, 0, 1);
	gl_FragColor = vec4(0,0,0.5, 1) * texture2D(waveNoize, coord);
}
