angular.module('app')
.controller('navCtrl', function($scope, collectionService) {

    $scope.personData = collectionService.personData;
    $scope.currentWeather = collectionService.currentWeather;

console.log("navCtrl is now active");
console.log('personData: ', $scope.personData);
console.log('currentWeather: ', $scope.currentWeather);

})
