angular.module('app')
.directive('mapDir', function(){
    return{
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function(scope, element, attrs) {
            console.log('mapDir is now working');
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
