(function () {
    'use strict';

    angular.module('LunchCheck',[])
    .controller('ItemController', ItemController);

    ItemController.$inject = ['$scope'];
    function ItemController($scope) {
        $scope.input = "";
        $scope.message = "";
        $scope.checkItems = function (){
            var string = $scope.input.split(", ");
            string = string.filter(Boolean);
            if ($scope.input == "") {
                $scope.alertClass = 'alert alert-danger';
                $scope.alertRole = 'alert';
                $scope.alertIconClass = 'glyphicon glyphicon-exclamation-sign';
                $scope.alertMessage = 'Please enter data first';
            }else if (string.length <= 3) {
                $scope.alertClass = 'alert alert-success';
                $scope.alertRole = 'alert';
                $scope.alertIconClass = 'glyphicon glyphicon-ok-sign';
                $scope.alertMessage = 'Enjoy!';
            } else if (string.length > 3){
                $scope.alertClass = 'alert alert-warning';
                $scope.alertRole = 'alert';
                $scope.alertIconClass = 'glyphicon glyphicon-remove-circle'
                $scope.alertMessage = 'Too much!';
            }
        };

    }
})();