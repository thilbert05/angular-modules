(function () {
    'use strict';

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController1',ShoppingListController1)
    .controller('ShoppingListController2',ShoppingListController2)
    .factory('ShoppingListFactory',ShoppingListFactory)
    .directive('shoppingList',ShoppingList);

    function ShoppingList() {
        var ddo = {
            templateUrl: './html/shoppingList.html',
            scope: {
                list: '=myList',
                title: '@title'
            }
        };
        return ddo;
    }



    ShoppingListController1.$inject = ['ShoppingListFactory'];
    function ShoppingListController1(ShoppingListFactory){
        var list = this;

        //create a new ShoppingListService using the factory
        var shoppingList = ShoppingListFactory();

        list.itemName = '';
        list.itemQuantity = '';

        list.items = shoppingList.getItems();
        var origTitle = 'Shopping list #1';
        //initial value of list.title with 0 items
        list.title = origTitle + " ( " + list.items.length + " items )";

        list.addItem = function () {
            shoppingList.addItem(list.itemName,list.itemQuantity);
            list.title = origTitle + " ( " + list.items.length + " items )";
        };

        list.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);
            list.title = origTitle + " ( " + list.items.length + " items )";
        }

    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory){
        var list = this;

        list.itemName = '';
        list.itemQuantity = '';

        //create a new ShoppingListService using the factory
        var shoppingList = ShoppingListFactory(3);

        list.items = shoppingList.getItems();

        list.addItem = function(){
            try {
                shoppingList.addItem(list.itemName,list.itemQuantity);
            } catch (error) {
                list.errorMessage = error.message;
            }
        };

        list.removeItem = function (itemIndex) {
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