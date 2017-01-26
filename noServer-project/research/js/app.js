// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router'])
.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/wrong');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home/home.html'
        }),
        .state('navigation', {
            url: '/nav'
            templateUrl: './views/navigation/navTmpl.html'
        }),
        .state('map', {
            url: '/map',
            templateUrl: './views/map/mapTmpl.html'
        })
        .state('wrong' {
            url: '/wrong',
            templateUrl: './views/wrongPage/wrongPage.html'
        })






});
