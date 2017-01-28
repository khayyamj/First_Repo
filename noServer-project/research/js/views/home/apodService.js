angular.module('app')
.service('apodService', function($http) {


var urlBackground = 'http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg';

this.backgroundStyle = {
    "background-image" : urlBackground,
    "background-position" : "center",
    "background-size" : "cover",
    "background-repeat" : "no-repeat",
    "background-attachment" : "fixed",
    "width" : "100%",
    "height" : "100%",
    "display" : "flex",
    "justify-content" : "center",
    "align-items" : "center"
}
var self = this;

    self.getApodPic = function() {
        return $http({
            method: 'GET',
            url: 'https://api.nasa.gov/planetary/apod?api_key=6bYPFTSlZLuHqruzDWBUaXpZhZDhD6YinK3Um7ve'

        }).then(function(response) {
            var backgroundUrl = response.data.url;
            var urlBackground = 'url(' + backgroundUrl + ')';
            return urlBackground;
        },
        function (error) {
            urlBackground = `http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg`;
        })
        .then(function(urlBackground){
            self.backgroundStyle = {
                "background-image" : urlBackground,
                "background-position" : "center",
                "background-size" : "cover",
                "background-repeat" : "no-repeat",
                "background-attachment" : "fixed",
                "width" : "100%",
                "height" : "100%",
                "display" : "flex",
                "justify-content" : "center",
                "align-items" : "center"
            }
            return self.backgroundStyle;
        });
    }

    // getApodPic();


})
