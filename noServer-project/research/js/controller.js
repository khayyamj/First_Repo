// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
.controller("mainCtrl", function($scope, collectionService, apodService) {
  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================


$scope.apodPic = function() {
  apodService.getApodPic().then(function(response) {
      $scope.podPic = response;
      $scope.mainBackPicRef = 'url(' + $scope.podPic + ')';
      console.log($scope.mainBackPicRef);
  });
};
$scope.apodPic();

$scope.style = apodService.backgroundStyle;

        // end of controller
});
