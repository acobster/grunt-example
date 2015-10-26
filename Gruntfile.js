/*global module:false*/
module.exports = function(grunt) {

  // Configure Grunt tasks...
  grunt.initConfig({
    less: {
      stylesheet: {
        files: {
          'css/style.css': ['less/style.less']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    },

    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['less']
      }
    },
  });

  // Register Node plugins as Grunt tasks...
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Default task.
  grunt.registerTask('default', ['less', 'connect', 'watch']);

};
