'use strict';

// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './js/views/home/home.html'
    }).state('navigation', {
        url: '/nav',
        templateUrl: './js/views/navigation/navTmpl.html',
        controller: 'navCtrl'
    }).state('map', {
        url: '/map',
        templateUrl: './js/views/map/mapTmpl.html'
    });

    $urlRouterProvider.otherwise('/');
});
"use strict";

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function ($scope, $state, collectionService, apodService) {
    // VARIABLES
    // ============================================================


    // FUNCTIONS
    // ============================================================

    // home page functions

    $scope.style = apodService.backgroundStyle;
    $scope.getbackground = function () {
        apodService.getApodPic().then(function (response) {
            $scope.style = response;
        });
    };
    $scope.getbackground();

    // navigation page FUNCTIONS

    $scope.start = function () {
        console.log("Started getGeoLocation function...");
        collectionService.getGeoLocation().then(function (response) {
            console.log('starting collectionService function');
            collectionService.getWeatherForcast(response);
            console.log('completed getWeatherForcast function');
            return response;
        }).then(function (response) {
            console.log('Controller data returned: ', response);
            $state.go('navigation');
        }).then(function (response) {
            console.log('completed Start function cycle');
        });
    };

    // end of controller
});
"use strict";

// INITILIZE SERVICE
// ============================================================
angular.module("app").service("collectionService", function ($http) {
    // VARIABLES

    var self = this;

    this.apiKeyUSCensus = 'ba5f504113d9898c1af0c36a2d6428e98616223b';
    this.apiGoogleMaps = 'AIzaSyAuRssyGZCeA3to';
    this.apiNASA = '6bYPFTSlZLuHqruzDWBUaXpZhZDhD6YinK3Um7ve';
    this.apiOpenWeatherMap = 'c94e2f8cb7f535e349c15a0ddb7c8a8e';
    this.apiWeatherUnderground = 'd91bd8a3ab96a8cb';

    var broken = 'broken link';

    // START FUNCTIONS
    // ============================================================


    self.getGeoLocation = function () {
        return $http({
            method: 'GET',
            url: 'http://ip-api.com/json'
        }).then(function (response) {
            self.personData = response.data;
            return response.data;
        });
    };

    self.getWeatherForcast = function (location) {
        // state string to lowercase
        var state = location.region.toLowerCase();
        // concat city string to first_middle_last format
        var city = '';
        var cityArr = location.city.split(' ');
        for (var i = 0; i < cityArr.length; i++) {
            city = cityArr[i] + '_';
        }
        city = city.substr(0, city.length - 1);

        return $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/d91bd8a3ab96a8cb/conditions/q/' + state + '/' + city + '.json'
            // url: ''  // to not run to many requests
        }).then(function (response) {
            self.currentWeather = response.data.current_observation;
            console.log(self.currentWeather);
            return response.data.current_observation;
        }, function (error) {
            alert('Weather Request Data Error');
            return 'No Weather Forcast Available';
        });
    };

    // OTHER FUNCTIONS
    // ============================================================

    self.gatherData = function () {
        self.getGeoLocation().then(function (locationResponse) {
            return locationResponse;
        }) // end of then locationResponse

        .then(function (GeoLocationResponse) {
            // determine if weather is appropriate for indoor/outdoor activity
            // add information to personal data object
            //need to return something from this function
            self.getWeatherForcast(GeoLocationResponse).then(function (response) {
                console.log('Last working spot...find lost return response after this point');
            }); // end then getWeatherForcast function
            console.log('Response returning to controller: ', response);
            return broken;
        }); // end then GeoLocationResponse
    };

    //end of service
});
'use strict';

angular.module('app').service('apodService', function ($http) {

    var urlBackground = 'http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg';

    this.backgroundStyle = {
        "background-image": urlBackground,
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
    var self = this;

    self.getApodPic = function () {
        return $http({
            method: 'GET',
            url: 'https://api.nasa.gov/planetary/apod?api_key=6bYPFTSlZLuHqruzDWBUaXpZhZDhD6YinK3Um7ve'

        }).then(function (response) {
            var backgroundUrl = response.data.url;
            var urlBackground = 'url(' + backgroundUrl + ')';
            return urlBackground;
        }, function (error) {
            urlBackground = 'http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg';
        }).then(function (urlBackground) {
            self.backgroundStyle = {
                "background-image": urlBackground,
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
            return self.backgroundStyle;
        });
    };

    // getApodPic();

});
'use strict';

angular.module('app').directive('bkgrdDir', function () {});
'use strict';

angular.module('app').directive('mapDir', function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function link(scope, element, attrs) {
            var myLatLng = new google.maps.LatLng(40.2263, -111.6607);
            var mapOptions = {
                center: myLatLng,
                zoom: 15,
                mapTypeId: 'satellite'
            };
            var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'You Are Here'
            });
            marker.setMap(map);
        }
    };
});
'use strict';

angular.module('app').controller('navCtrl', function ($scope, collectionService) {

    $scope.personData = collectionService.personData;
    $scope.currentWeather = collectionService.currentWeather;

    console.log("navCtrl is now active");
    console.log('personData: ', $scope.personData);
    console.log('currentWeather: ', $scope.currentWeather);
});
//# sourceMappingURL=bundle.js.map
