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
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile']
      },
      less: {
        files: ['less/*.less'],
        tasks: ['less', 'cssmin']
      },
      js: {
        files: ['lib/*.js', 'spec/*.js'],
        tasks: ['jshint', 'jasmine']
      }
    },

    jshint: {
      gruntfile: ['Gruntfile.js'],
      lib: ['lib/*.js'],
      spec: ['spec/*.js']
    },

    jasmine: {
      lib: {
        src: 'lib/*.js',
        options: {
          specs: 'spec/*.spec.js',
          vendor: ['vendor/jquery.js', 'vendor/jasmine-jquery.js']
        }
      }
    },

  });

  // Register Node plugins as Grunt tasks...
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-jasmine' );

  // Default task.
  grunt.registerTask('default', ['less', 'cssmin', 'connect', 'watch']);

};
