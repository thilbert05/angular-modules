(function () {
    'use strict';

    angular.module('ShoppingListApp', [])
    .controller('AddItemController',AddItemController)
    .controller('ShowItemController',ShowItemController)
    .service('ShoppingListService',ShoppingListService);

    AddItemController.$inject = ['ShoppingListService'];
    function AddItemController(ShoppingListService){
        var itemAdder = this;

        itemAdder.itemName = '';
        itemAdder.itemQuantity = '';

        itemAdder.addItem = function () {
            ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity)
        };

    }

    ShowItemController.$inject = ['ShoppingListService'];
    function ShowItemController(ShoppingListService){
        var showItem = this;

        showItem.items = ShoppingListService.getItems();
        showItem.removeItem = function (itemIndex) {
            ShoppingListService.removeItem(itemIndex);
        }
    }

    //Service function constructor
    function ShoppingListService() {
        var service = this;

        //list of shopping items
        var items =[];

        service.addItem = function (itemName,itemQuantity) {
           var item = {
                name: itemName,
                quantity: itemQuantity
            };
            items.push(item); //push the item object into items array
        }

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex,1);
        }

        service.getItems = function () {
            return items;
        }

    }

    
})();