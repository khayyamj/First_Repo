angular.module('app')
.directive('mapDir', function(){
    return{
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        scope: {
            personData: '='
        },
        link: function(scope, element, attrs) {
            console.log("Scope: ", scope);
            var myLatLng = new google.maps.LatLng(scope.personData.lat, scope.personData.lon);
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
