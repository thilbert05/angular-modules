(function(){
    'use strict';

    angular.module('NameCalculator',[])

    .controller('NameCalculatorController', function($scope){
        $scope.name = ""; //for ng-model in html
        $scope.totalValue = 0;
        $scope.totalCharValue = 0;

        $scope.displayNumeric = function (){ //for ng-keyup in html
            var totalNameValue = calculateNumericForString($scope.name); //get total value
            var totalCharValue = calculateNumbersOfCharacters($scope.name);
            $scope.totalValue = totalNameValue;
            $scope.totalCharValue = totalCharValue;
        };

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }

        function calculateNumbersOfCharacters(string){
            var totalCharValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalCharValue = string.length-1;
                totalCharValue++;
            }
            return totalCharValue;
        }

    });
})();