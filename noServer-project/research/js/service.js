// INITILIZE SERVICE
// ============================================================
angular.module("app").service("collectionService", function($http) {
  // VARIABLES
    this.apiKeyUSCensus = 'ba5f504113d9898c1af0c36a2d6428e98616223b';

  // CRUD FUNCTIONS
  // ============================================================
  this.getCollections = function() {
    return $http({
      method: 'GET',
      url: 'http://api.census.gov/data/bds/firms?get=ifsize,fsize,fage4,estabs&for=us:*&time=2014&sic1=0&key=' + this.apiKeyUSCensus
    })
    .then(function(response) {
        return response.data;
    });
  };

  // OTHER FUNCTIONS
  // ============================================================


});
