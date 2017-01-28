angular.module('app')
.controller('navCtrl', function($scope, collectionService, $state) {

    $scope.personData = collectionService.personData;
    $scope.currentWeather = collectionService.currentWeather;

console.log("navCtrl is now active");
console.log('currentWeather: ', $scope.currentWeather);

    $scope.gotoMap = function() {
        console.log('goto Map button clicked');
        $state.go('map');
    }

})
