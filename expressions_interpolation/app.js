(function(){
    'use strict';
    angular.module("myExpressions",[])
    .controller("MsgController",MsgController)
    .filter('learn',LearnFilter)
    .filter('truth',TruthFilter);

    MsgController.$inject = ['$scope', '$filter', 'learnFilter'];
    function MsgController($scope,$filter,learnFilter){
        $scope.name = "Tomas";
        $scope.sayMessage = function (){
            var msg = "Wants to learn AngularJS to perfection!";
            var outputmsg = $filter('uppercase')(msg);
            return outputmsg;
        };
        $scope.sayLearnMessage = function (){
            var msg = "Wants to learn AngularJS to perfection!";
            var outputmsg = learnFilter(msg);
            return outputmsg;
        };

        //initiate stateOfBeing
        $scope.stateOfBeing = "hungry";

        $scope.feedTomas = function (){
            $scope.mealCost = 10.95;
            $scope.stateOfBeing = "fed";
        }

    }

    //filter factory goes outside the controller
    function LearnFilter(){
        return function (input){
            input = input || "";
            input = input.replace("learn", "master");
            return input;
        };
    }

    function TruthFilter(){
        return function (input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }
    
})();