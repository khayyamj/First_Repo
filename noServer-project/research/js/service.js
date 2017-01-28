// INITILIZE SERVICE
// ============================================================
angular.module("app").service("collectionService", function($http) {
  // VARIABLES

  var self = this;

    this.apiKeyUSCensus = 'ba5f504113d9898c1af0c36a2d6428e98616223b';
    this.apiGoogleMaps = 'AIzaSyAuRssyGZCeA3to';
    this.apiNASA = '6bYPFTSlZLuHqruzDWBUaXpZhZDhD6YinK3Um7ve';
    this.apiOpenWeatherMap = 'c94e2f8cb7f535e349c15a0ddb7c8a8e';
    this.apiWeatherUnderground = 'd91bd8a3ab96a8cb';

var broken = 'broken link'

  // START FUNCTIONS
  // ============================================================



    self.getGeoLocation = function () {
        return $http({
            method: 'GET',
            url: 'http://ip-api.com/json'
        }).then (function(response) {
            self.personData = response.data;
            return response.data;
        })
    }

    self.getWeatherForcast = function (location) {

// state string to lowercase
        var state = location.region.toLowerCase();

// concat city string to first_middle_last format
        var city = '';
        var cityArr = location.city.split(' ');
        for(var i = 0; i < cityArr.length; i++) {
            city = cityArr[i] + '_';
        }
        city = city.substr(0,city.length - 1);


        return $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/d91bd8a3ab96a8cb/conditions/q/' + state + '/' + city + '.json'
            // url: ''  // to not run to many requests
        }).then(function(response) {
            self.currentWeather = response.data.current_observation;
            return response.data.current_observation;
        }
        ,   function(error) {
            alert('Weather Request Data Error')
            return 'No Weather Forcast Available';
        })
    }


  // OTHER FUNCTIONS
  // ============================================================

  self.gatherData = function() {
      self.getGeoLocation()
          .then(function(locationResponse) {
              return locationResponse;
          })  // end of then locationResponse

          .then(function(GeoLocationResponse){
              // determine if weather is appropriate for indoor/outdoor activity
              // add information to personal data object
              self.getWeatherForcast(GeoLocationResponse)
                .then(function(response) {
console.log('getWeatherForcast returning: ', broken)
                    return broken;
                })  // end then getWeatherForcast function
console.log('Response returning to controller: ', response);
            return broken;
            })    // end then GeoLocationResponse

  }



            //end of service
});
