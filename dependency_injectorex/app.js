(function(){

    angular.module('DIapp',[])
    .controller('DIController',DIController);

    DIController.$inject = ['$scope','$filter'];
    function DIController($scope,$filter){
        $scope.name = "Tomas";
        
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }
    
})();




