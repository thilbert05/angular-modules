(function (){
    'use strict';

    var shoppingList1 = ['Milk', 'Oranges', 'Bananas', 'Water Melons', 'Pasta', 'Rice', 'Beans'];

    var shoppingList2 = [
        {
            name: 'Bananas',
            quantity: 4
        },
        {
            name: 'Melons',
            quantity: 1
        },
        {
            name: 'Avocado',
            quantity: 6
        },
        {
            name: 'Rice Bag',
            quantity: 1
        },
        {
            name: 'Pasta',
            quantity: 2
        }
    ];

    angular.module('ShoppingList',[])
    .controller('ShoppingListController',ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope){

        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        //the following function needs to be declared in the scope to be called by ng-click event
         var addItem = function () {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };
            
            $scope.shoppingList2.push(newItem);
        };

        //function addItem is passed as a value into the scope.
        $scope.addItem = addItem;

    }

})();