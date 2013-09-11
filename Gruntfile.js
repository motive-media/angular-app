module.exports = function (grunt) {
    grunt.initConfig({
        base_url: '',
        js_url: '<%= base_url %>/js',
        js_build_url: '<% base_url %>/js_build',
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                trailing: true,
                strict: true,
                forin: true,
                loopfunc: true,
                ignores: ['<%= js_url %>/**/*.min.js', '<%= js_url %>/**/*.all.js']
            },
            files: ['<%= js_url %>/**/*.js']
        },

        ngmin: {
            controllers: {
                expand: true,
                cwd: '<% js_build_url %>',
                src: ['controllers/**/*.js'],
                dest: '<% js_build_url %>/controllers'
            },
            directives: {
                expand: true,
                cwd: '<% js_build_url %>',
                src: ['directives/**/*.js'],
                dest: '<% js_build_url %>/directives'
            },
            filters: {
                expand: true,
                cwd: '<% js_build_url %>',
                src: ['filters/**/*.js'],
                dest: '<% js_build_url %>/filters'
            },
            views: {
                expand: true,
                cwd: '<% js_build_url %>',
                src: ['views/**/*.js'],
                dest: '<% js_build_url %>/views'
            }
        },

        clean: {
            build: ['<% js_build_url %>']
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= js_url %>',
                        src: ['**'],
                        dest: '<% js_build_url %>'
                    }
                ]
            }
        },

        requirejs: {
            build: {
                options: {
                    almond: true,
                    name: 'main',
                    compress: 'none',
                    baseUrl: '<% js_build_url %>',
                    mainConfigFile: '<% js_build_url %>/main.js',
                    out: '<% js_build_url %>/main.build.js',
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
                    '<%= js_url %>/main.min.js': ['<% js_build_url %>/main.build.js']
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Register tasks
    //grunt.registerTask('default', ['jshint', 'requirejs:build', 'uglify:build']);
    //grunt.registerTask('build', ['requirejs:build', 'uglify:build']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', [
        'jshint',
        'copy',
        'ngmin',
        'requirejs',
        'uglify:build',
        'clean'
    ]);
};
