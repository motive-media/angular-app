require.config({
    baseUrl: '/js',
    paths: {
        // Vendor files
        'jquery': '../vendor/jquery/jquery',
        'angular': 'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.min',

        // Cobalt files
        'cbDirectives': '../vendor/cobalt-js/angularjs/cbDirectives',
        //'cbDirectives': 'cbDirectives',
        'cbSlider': '../vendor/cobalt-js/angularjs/directives/cbSlider',
        //cbSlider': 'directives/cbSlider',

        // Application files
        'app': 'app'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'angular': {
            exports: 'angular'
        },
        'cbDirectives': {
            deps: ['angular']
        },
        'cbSlider': {
            deps: ['cbDirectives']
        }
    }
});

require(['jquery', 'angular', 'app', 'cbSlider'], function ($, angular, app) {
    angular.bootstrap(document, ['cobaltApp']);
});
