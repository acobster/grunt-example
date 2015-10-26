/*global module:false*/
module.exports = function(grunt) {

  // Configure Grunt tasks...
  grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8080,
					base: '.',
					keepalive: true
				}
			}
		},
	});

  // Register Node plugins as Grunt tasks...
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

  // Default task.
  grunt.registerTask('default', ['connect']);

};
