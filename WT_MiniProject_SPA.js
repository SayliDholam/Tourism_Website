var app = angular.module('myApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/icon',
            {
                templateUrl: 'WT_icon.html'
            })
        .when('/home',
            {
                templateUrl: 'WT_home.html'
            })
            .when('/package',
            {
                templateUrl: 'WT_package.html'
            })
            .when('/destination',
            {
                templateUrl: 'WT_destination.html'
            })
            .when('/branches',
            {
                templateUrl: 'WT_branches.html'
            })
        .otherwise({ redirectTo: '/' });
});

