module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style4.5.css': 'sass/style4.5.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
        browserSync: {
            bsFiles: {
                src: 'css/*.css'
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./",
                    index: "index4.5.html"
                }
            }
        },
        watch: {
            scripts: {
                files: ['sass/style4.5.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }

    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).

    grunt.registerTask('default', ['sass', 'imagemin', 'watch', 'browserSync']);
};