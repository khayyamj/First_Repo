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
            $scope.personData = collectionService.personData;
            console.log ('**Step 2** returned $scope.personData: ',$scope.personData, '****');
            collectionService.getWeatherForcast(response)
                .then(function(response) {
                    $scope.currentWeather = collectionService.currentWeather;
                    console.log("**Step 4** returned $scope.currentWeather: ",$scope.currentWeather);
                        $state.go('navigation');
                    })
                return response;
            })

        .then(function(response) {
        })
    }


        // end of controller
});
