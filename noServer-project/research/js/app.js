// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router'])
.config(function($stateProvider,$urlRouterProvider){


    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './js/views/home/home.html'
        })
        .state('navigation', {
            url: '/nav',
            templateUrl: './js/views/navigation/navTmpl.html',
            controller: 'navCtrl'
        })
        .state('map', {
            url: '/map',
            templateUrl: './js/views/map/mapTmpl.html'
        });

    $urlRouterProvider.otherwise('/');




});
