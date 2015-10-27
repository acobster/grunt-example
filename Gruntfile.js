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
        tasks: ['jshint', 'jasmine', 'concat', 'uglify', 'jsdoc']
      },
      doc: {
        files: ['example-readme.md'],
        tasks: ['jsdoc']
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
          vendor: ['bower_components/jquery/dist/jquery.js', 'bower_components/jasmine-jquery/lib/jasmine-jquery.js']
        }
      }
    },

    concat: {
      js: {
        src: ['bower_components/jquery/dist/jquery.js', 'lib/Repeater.js', 'lib/repeater.jquery.js'],
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

    bower: {
      install: {
        options: {
          install: true,
          copy: false
        }
      }
    },

    jsdoc: {
      lib: {
        src: ['lib/*.js', 'example-readme.md'],
        dest: 'doc'
      }
    }

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
  grunt.loadNpmTasks( 'grunt-bower-installer' );
  grunt.loadNpmTasks( 'grunt-jsdoc' );

  // Default task.
  grunt.registerTask('default', ['bower', 'less', 'cssmin', 'jsdoc', 'connect', 'watch']);

};
