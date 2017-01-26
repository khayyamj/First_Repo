// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, collectionService) {
  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

  $scope.getData = function() {
  collectionService.getCollections()
    .then(function(response) {
        $scope.returnData = response;
        console.log($scope.returnData);
    });
    }
    $scope.getData();

    
});
