(function () {
    'use strict';
    
    angular.module('myFirstApp',[]) //chain the module with the controller that's why it does not end with a semicolon

    .controller('MyFirstController',function ($scope){
        $scope.name = "";
        $scope.sayHello = function () {
            return "Hello Coursera";
        };
    });
    
})();