module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                trailing: true,
                strict: true,
                forin: true,
                loopfunc: true,
                ignores: ['js/**/*.min.js']
            },
            files: ['js/**/*.js']
        },

        requirejs: {
            build: {
                options: {
                    almond: true,
                    name: 'main',
                    baseUrl: 'js',
                    optimize: 'none',
                    mainConfigFile: 'js/main.js',
                    out: 'js/main.all.js',
                    preserveLicenseComments: false,
                    loglevel: 0
                }
            }
        },

        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: {
                    'js/main.min.js': ['js/main.all.js']
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register tasks
    grunt.registerTask('default', ['jshint', 'requirejs:build', 'uglify:build']);
    grunt.registerTask('build', ['requirejs:build', 'uglify:build']);
};
