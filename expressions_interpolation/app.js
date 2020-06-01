(function(){
    'use strict';
    angular.module("myExpressions",[])
    .controller("MsgController",MsgController)

    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.name = "Tomas";
        $scope.sayMessage = function (){
            return "Wants to learn AngularJS to perfection!"
        };

        //initiate stateOfBeing
        $scope.stateOfBeing = "hungry";

        $scope.feedTomas = function (){
            $scope.stateOfBeing = "fed";
        }
    }


    
})();