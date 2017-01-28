// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
.controller("mainCtrl", function($scope, $state, collectionService, apodService) {
  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

  // home page functions

$scope.style = apodService.backgroundStyle;
$scope.getbackground = function(){
    apodService.getApodPic().then(function(response) {
        $scope.style = response;
    })
};
$scope.getbackground();



    // navigation page FUNCTIONS

$scope.start = function () {
    collectionService.getGeoLocation()
        .then(function(response){
            collectionService.getWeatherForcast(response)
                return response;
            })
        .then(function(response) {
                $state.go('navigation');
            })
        .then(function(response) {
        })
    }


        // end of controller
});
