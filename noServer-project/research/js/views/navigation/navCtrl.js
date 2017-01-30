angular.module('app')
.controller('navCtrl', function($scope, collectionService, $state) {

var setVars = function() {
    $scope.personData = collectionService.personData;
    $scope.currentWeather = collectionService.currentWeather;
}();


    $scope.gotoMap = function() {
        $state.go('map');
    }

})
