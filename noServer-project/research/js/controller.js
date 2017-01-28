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
    collectionService.gatherData()
        .then(function(response) {
            console.log('Controller data returned: ', response);
            $state.go('navigation');

        })
    }




        // end of controller
});
