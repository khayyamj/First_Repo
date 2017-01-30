angular.module('app')
.controller('navCtrl', function($scope, collectionService, $state) {

var setVars = function() {
    $scope.personData = collectionService.personData;
    $scope.currentWeather = collectionService.currentWeather;
    console.log('self-invocing function worked, assigned variables');
    console.log('navCtrl currentWeather: ', $scope.currentWeather);
}();


    $scope.gotoMap = function() {
        $state.go('map');
    }

})
