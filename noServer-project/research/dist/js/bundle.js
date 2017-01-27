'use strict';

// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

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

    $urlRouterProvider.otherwise('/wrong');
});
"use strict";

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function ($scope, collectionService, apodService) {
  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================


  $scope.apodPic = function () {
    apodService.getApodPic().then(function (response) {
      $scope.podPic = response;
      $scope.mainBackPicRef = 'url(' + $scope.podPic + ')';
      console.log($scope.mainBackPicRef);
    });
  };
  $scope.apodPic();

  $scope.style = apodService.backgroundStyle;

  // end of controller
});
"use strict";

// INITILIZE SERVICE
// ============================================================
angular.module("app").service("collectionService", function ($http) {
  // VARIABLES
  this.apiKeyUSCensus = 'ba5f504113d9898c1af0c36a2d6428e98616223b';
  this.apiGoogleMaps = 'AIzaSyAuRssyGZCeA3to';

  // CRUD FUNCTIONS
  // ============================================================
  // this.getCollections = function() {
  //   return $http({
  //     method: 'GET',
  //     url: 'http://api.census.gov/data/bds/firms?get=ifsize,fsize,fage4,estabs&for=us:*&time=2014&sic1=0&key=' + this.apiKeyUSCensus
  //   })
  //   .then(function(response) {
  //       return response.data;
  //   });
  // };

  // OTHER FUNCTIONS
  // ============================================================


  //end of service
});
'use strict';

angular.module('app').service('apodService', function ($http) {

    this.getApodPic = function () {
        return $http({
            method: 'GET',
            url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        }).then(function (response) {
            this.backgroundUrl = response.data.url;
            return response.data.url;
        }, function (response) {
            this.backgroundUrl = 'http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg';
        });
    };

    var tempBackground = 'url(http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg)';

    this.backgroundStyle = {
        // "background-image" : this.backgroundUrl,
        "background-image": tempBackground,
        "background-position": "center",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
    };
});
'use strict';

angular.module('app').directive('bkgrdDir', function () {});
//# sourceMappingURL=bundle.js.map
