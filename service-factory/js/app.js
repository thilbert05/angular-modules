(function () {
    'use strict';

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController1',ShoppingListController1)
    .controller('ShoppingListController2',ShoppingListController2)
    .factory('ShoppingListFactory',ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];
    function ShoppingListController1(ShoppingListFactory){
        var list1 = this;

        list1.itemName = '';
        list1.itemQuantity = '';

        //create a new ShoppingListService using the factory
        var shoppingList = ShoppingListFactory();

        list1.items = shoppingList.getItems();

        list1.addItem = function () {
            shoppingList.addItem(list1.itemName,list1.itemQuantity)
        };

        list1.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);
        }

    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory){
        var list2 = this;

        list2.itemName = '';
        list2.itemQuantity = '';

        //create a new ShoppingListService using the factory
        var shoppingList = ShoppingListFactory(3);

        list2.items = shoppingList.getItems();

        list2.addItem = function(){
            try {
                shoppingList.addItem(list2.itemName,list2.itemQuantity);
            } catch (error) {
                list2.errorMessage = error.message;
            }
        };

        list2.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);
        }
    }

    //Service function constructor
    function ShoppingListService(maxItems) {
        var service = this;

        //list of shopping items
        var items =[];

        service.addItem = function (itemName,itemQuantity) {
            if ((maxItems === undefined )|| (maxItems !== undefined) && (items.length < maxItems)) {
                var item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item); //push the item object into items array
            } else {
                throw new Error("Max Items (" + maxItems + ") reached.");
            }
           };

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex,1);
        }

        service.getItems = function () {
            return items;
        }

    }

    //Factory declaration
    function ShoppingListFactory(){
        var factory = function (maxItems) {
            return new ShoppingListService(maxItems);
        }
        return factory; //return the value of factory function
    }

    
})();