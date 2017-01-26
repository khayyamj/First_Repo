'use strict';

// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/wrong');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './js/views/home/home.html'
    }).state('navigation', {
        url: '/nav',
        templateUrl: './js/views/navigation/navTmpl.html'
    }).state('map', {
        url: '/map',
        templateUrl: './js/views/map/mapTmpl.html'
    }).state('wrong', {
        url: '/wrong',
        templateUrl: './js/views/wrongPage/wrongPage.html'
    });
});
"use strict";

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function ($scope, collectionService) {
    // VARIABLES
    // ============================================================


    // FUNCTIONS
    // ============================================================

    $scope.getData = function () {
        collectionService.getCollections().then(function (response) {
            $scope.returnData = response;
        });
    };
    $scope.getData();
});
"use strict";

// INITILIZE SERVICE
// ============================================================
angular.module("app").service("collectionService", function ($http) {
  // VARIABLES
  this.apiKeyUSCensus = 'ba5f504113d9898c1af0c36a2d6428e98616223b';

  // CRUD FUNCTIONS
  // ============================================================
  this.getCollections = function () {
    return $http({
      method: 'GET',
      url: 'http://api.census.gov/data/bds/firms?get=ifsize,fsize,fage4,estabs&for=us:*&time=2014&sic1=0&key=' + this.apiKeyUSCensus
    }).then(function (response) {
      return response.data;
    });
  };

  // OTHER FUNCTIONS
  // ============================================================

});
//# sourceMappingURL=bundle.js.map
