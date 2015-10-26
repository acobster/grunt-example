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
        tasks: ['jshint', 'jasmine', 'concat', 'uglify']
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

    concat: {
      js: {
        src: ['vendor/jquery.js', 'lib/Repeater.js', 'lib/repeater.jquery.js'],
        dest: 'js/project.js'
      }
    },

    uglify: {
      options: {
        mangle: false,
      },
      js: {
        files: {
          'js/project.min.js': ['js/project.js']
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
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );

  // Default task.
  grunt.registerTask('default', ['less', 'cssmin', 'connect', 'watch']);

};
