(function (){
    'use strict';

    angular.module('AlreadyBoughtController',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    //ToBuyController Logic
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        
       
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        
        
        toBuy.moveToBoughtList = function (itemIndex){
            try {
                return ShoppingListCheckOffService.moveToBoughtList(itemIndex);
            } catch (error) {
                toBuy.errorMessage = error.message;
            }
        };

    }
    //AlreadyBoughtController
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;

        var toBuyItems = [
            {
                name: "Cookies",
                quantity: 5
            },
            {
                name: "Doritos",
                quantity: 3
            },
            {
                name: "Marshmellows",
                quantity: 4
            },
            {
                name: "Gummie Bears",
                quantity: 20
            },
            {
                name: "Soda",
                quantity: 1
            }
        ];
        
        var boughtItems = [];

        service.moveToBoughtList = function (itemIndex) {
            var item = {
                name: toBuyItems[itemIndex].name,
                quantity: toBuyItems[itemIndex].quantity
            };
            boughtItems.push(item);
            toBuyItems.splice(itemIndex,1);
            if (toBuyItems.length == 0) {
                throw new Error("Everything is bought!")
            }
        };

        service.getToBuyItems = function (){
                return toBuyItems;
            
        };

        service.getBoughtItems = function () {
                return boughtItems;       
        };

    }
})();