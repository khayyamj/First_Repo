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
    console.log("Started getGeoLocation function...");
    collectionService.getGeoLocation()
        .then(function(response){
            console.log('starting collectionService function')
            collectionService.getWeatherForcast(response)
                console.log('completed getWeatherForcast function')
                return response;
            })
        .then(function(response) {
                console.log('Controller data returned: ', response);
                $state.go('navigation');
            })
        .then(function(response) {
            console.log('completed Start function cycle');
        })
    }


        // end of controller
});
