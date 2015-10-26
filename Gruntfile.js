/*global module:false*/
module.exports = function(grunt) {

  // Your obligatory Hello World Grunt example.
  grunt.task.registerTask('hello', function() {
    grunt.log.writeln('Hello, World!');
  });

  // Default task.
  grunt.registerTask('default', ['hello']);

};
