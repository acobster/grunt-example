# Grunt Example

Example repo showing exact steps for setting up a project with Grunt.

## How to use

You don't *use* this codebase per se: it's intended as a step-by-step guide showing exactly what you need to change in your codebase to automate steps in your development workflow. It's composed of a number of branches which are intended to be checked out in this order:

0. `hello-world`
1. `grunt-contrib-less`
2. `grunt-contrib-concat`
3. `grunt-contrib-cssmin`
2. `grunt-bower-installer`
3. `grunt-bower-installer-update`
3. `grunt-jsdoc`

Each branch in this sequence builds on the one before it, illustrating a single step in the process of automating an entire workflow. At the end of this sequence (which is also the HEAD of `master`), the codebase has become a simple but fleshed-out project with all of the following managed automatically by Grunt:

0. LESS compilation
1. JS concatenation and minification
2. CSS minification
3. Dependency management
4. Doc generation