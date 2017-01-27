// INITILIZE SERVICE
// ============================================================
angular.module("app").service("collectionService", function($http) {
  // VARIABLES
    this.apiKeyUSCensus = 'ba5f504113d9898c1af0c36a2d6428e98616223b';
    this.apiGoogleMaps = 'AIzaSyAuRssyGZCeA3to';
    this.apiNASA = '6bYPFTSlZLuHqruzDWBUaXpZhZDhD6YinK3Um7ve';
    this.apiOpenWeatherMap = 'c94e2f8cb7f535e349c15a0ddb7c8a8e'

  // START FUNCTIONS
  // ============================================================

    this.getGeoLocation = function () {
        return $http({
            method: 'GET',
            url: 'http://ip-api.com/json'
        }).then (function(response) {
            return response.data;
        })
    }

    this.getWeatherForcast = function (location) {
        return $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=' + this.apiOpenWeatherMap;
        }).then(function(response) {
            return response.data;
        }
        ,   function() {
            return 'No Weather Forcast Available';
        })
    }
  // OTHER FUNCTIONS
  // ============================================================





            //end of service
});
