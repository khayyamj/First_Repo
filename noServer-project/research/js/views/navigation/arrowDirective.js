angular.module('app')
.directive('arrowDir', function(){
    return {
        restrict: 'A',
        scope: {
            pressure: '='
        },
        link: function (scope, elem, attrs) {
            if (scope.pressure === '-') {
                elem.css({
                    'transform': 'rotateX(0deg)'
                })
            }
        }
    }


})
