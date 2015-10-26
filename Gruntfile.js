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

    cssmin: {
      stylesheet: {
        files: {
          'css/style.min.css': ['css/style.css']
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
        tasks: ['less', 'cssmin']
      }
    },

  });

  // Register Node plugins as Grunt tasks...
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

  // Default task.
  grunt.registerTask('default', ['less', 'cssmin', 'connect', 'watch']);

};
