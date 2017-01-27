angular.module('app')
.service('apodService', function($http) {

    this.getApodPic = function() {
        return $http({
            method: 'GET',
            url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        }).then(function(response) {
            this.backgroundUrl = response.data.url;
            return response.data.url;
        },
        function (response) {
            this.backgroundUrl = `http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg`;
        });
    }

var tempBackground = 'url(http://apod.nasa.gov/apod/image/1701/ab_moon_from_geo_orbit_med_res_jan_15_2017_1024.jpg)';

    this.backgroundStyle = {
        // "background-image" : this.backgroundUrl,
        "background-image" : tempBackground,
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
})
