var cma = angular.module('cma', ['ui.router']);

cma.config(function ($stateProvider,$urlRouterProvider) {
    //noinspection JSUnresolvedFunction
    // $urlRouterProvider.otherwise("/");
    $stateProvider

    // route for the home page
        .state('producer', {
            url:'/producer',
            templateUrl: 'views/producer/p.html',
            // controller: 'mainController'
        })

        // route for the about page
        .state('consumer', {
            url:'/consumer',
            templateUrl: 'views/consumer/c.html'
            //controllerAs: 'pages/about/aboutController'
        })

       });
// });