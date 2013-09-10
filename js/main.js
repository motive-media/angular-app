require.config({
    baseUrl: '/js',
    paths: {
        // Vendor files
        'jquery': '../vendor/jquery/jquery.min',
        //'angular': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.min',
        'angular': 'vendor/angular.1.1.5.min',

        // Cobalt files
        //'cbDirectives': '../vendor/cobalt-js/angularjs/cbDirectives',
        'cobaltAngular': '../vendor/cobalt-js/cobalt.angular',

        // Application files
        'app': 'app'

    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'cobaltAngular': {
            deps: ['angular']
        }
    }
});

require(['jquery', 'angular', 'app'], function ($, angular, app) {
    'use strict';

    angular.bootstrap(document, ['cobaltApp']);
});
