module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        watch: {
            scripts: {
                files: ['sass/style4.5.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        },
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
                server: {
                    baseDir: "./"
                }
            }
        },
        

    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).

    grunt.registerTask('default', ['sass', 'imagemin', 'watch', 'browserSync']);
};