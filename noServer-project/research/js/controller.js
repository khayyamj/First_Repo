// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
.controller("mainCtrl", function($scope, collectionService, apodService) {
  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

  // home page functions

$scope.apodPic = function() {
  apodService.getApodPic().then(function(response) {
      $scope.podPic = response;
      $scope.mainBackPicRef = 'url(' + $scope.podPic + ')';
      console.log($scope.mainBackPicRef);
  });
};
$scope.apodPic();

$scope.style = apodService.backgroundStyle;



    // navigation page FUNCTIONS

$scope.start = function () {
    collectionService.getGeoLocation()
    .then(function(response) {  //get geoLocation
        $scope.geoLocation = response;
        console.log('geoLocation data: ', $scope.geoLocation);
    })
    .then(function(response) {  //find weather at current location
        collectionService.getWeatherForcast()
        .then(function(response) {
            $scope.weatherForcast = response;
            console.log('Weather Forcast Data: ', $scope.weatherForcast);
        })
    })

}




        // end of controller
});
