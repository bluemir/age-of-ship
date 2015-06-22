module.exports = function (grunt) {
	require("jit-grunt")(grunt, {
		express: "grunt-express-server"
	});

	grunt.initConfig({
		express: {
			options: {
			},
			dev: {
				options: {
					script:"app.js"
				}
			}
		},
		watch: {
			express: {
				files : ["app.js", "views/**.html"],
				tasks : ["express:dev"],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.registerTask("default", ["serve"]);

	grunt.registerTask("serve", ["express:dev", "watch"])
}
