"use strict"
angular. module("promise contact app")
    .controller("contactController",function($scope,contactService){
        var promise=contactService.getContacts();
        promise.then(function(result){
               var _contactIT = {};
                _contactIT.contacts = result;
                _contactIT.headers = Object.keys(result[0]);
                $scope.contactIT = _contactIT;
        })
        .catch(function(message){
            $scope.message=message;
        });
    });