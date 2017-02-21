angular.module('app')
.directive('mapDir', function(){
    return{
        restrict: 'E',
        template: '<div></div>',
        replace: true,

        link: function(scope, element, attrs) {
            var myLatLng = new google.maps.LatLng(40.2263, -111.6607);
            var mapOptions = {
                center: myLatLng,
                zoom: 13,
                mapTypeId: 'satellite'
            };
            var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'You Are Here'
            });

            marker.setMap(map);

            // new service material to add to project below this line...

            var request = {
               location: myLatLng,
               radius: '10000',
               types: 'restraunt'
             };

            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            var callback = function (results, status) {
                console.log("callback function started...");
             if (status == google.maps.places.PlacesServiceStatus.OK) {
               for (var i = 0; i < results.length; i++) {
                 var place = results[i];
                 createMarker(results[i]);
               }
             }
            }
        }
    };
});
