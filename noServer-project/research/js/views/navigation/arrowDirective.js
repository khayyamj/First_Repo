angular.module('app')
.directive('arrowDir', function(){
    return {
        restrict: 'A',
        scope: {
            pressure: '='
        },
        link: function (scope, elem, attrs) {
            console.log('scope.pressure: ', scope.pressure);
            if (scope.pressure === '-') {
                attrs.css ('transform', 'rotateX(180deg)')
            }
        }
    }


})
