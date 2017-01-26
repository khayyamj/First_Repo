// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router'])
.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        }),
        .state('navigation', {
            url: 'nav'
            templateUrl: 'navTmpl.html'
        }),
        .state('map', {
            url: 'map',
            templateUrl: 'mapTmpl.html'
        })






});
