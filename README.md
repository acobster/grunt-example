# Grunt Example

Example repo showing exact steps for setting up a project with Grunt.

## How to use

You don't *use* this codebase per se: it's intended as a step-by-step guide showing exactly what you need to change in your codebase to automate steps in your development workflow. It's composed of a number of branches which are intended to be checked out in this order:

0. `hello-world`
1. `grunt-server`
1. `grunt-contrib-less`
3. `grunt-contrib-cssmin`
1. `grunt-contrib-jasmine`
2. `grunt-contrib-concat`
2. `grunt-bower-installer`
3. `grunt-bower-installer-update`
3. `grunt-jsdoc`

As you checkout each branch, run:

```
$ npm install
$ grunt
```

This installs the newly declared dependencies for this step and runs the default grunt tasks; look at the line in `Gruntfile.js` that looks like the following to figure out what these default tasks are:

`grunt.registerTask('default', [...]);`

Each branch in this sequence builds on the one before it, illustrating a single step in the process of automating an entire workflow. At the end of this sequence (which is also the HEAD of `master`), the codebase has become a simple but fleshed-out project with all of the following managed automatically by Grunt:

0. Setting up a local dev server
1. LESS compilation
2. CSS minification
2. Automated unit testing
1. JS concatenation and minification
3. Dependency management
4. Doc generation