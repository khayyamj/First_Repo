// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router'])
.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/wrong');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './js/views/home/home.html'
        })
        .state('navigation', {
            url: '/nav',
            templateUrl: './js/views/navigation/navTmpl.html'
        })
        .state('map', {
            url: '/map',
            templateUrl: './js/views/map/mapTmpl.html'
        })
        .state('wrong', {
            url: '/wrong',
            templateUrl: './js/views/wrongPage/wrongPage.html'
        });






});
