"use strict"
angular.module('promise contact app')
    .factory('contactService',function($q,$timeout){
       var _getContacts = function(){
           var deferred = $q.defer();
           $timeout(function () {
               var x = Math.floor((Math.random() * 2) + 1);
               console.log(x);
               if(x==1) {
                   var result = [{                                                    // _ denotes private variables
                       firstName: 'John',
                       lastName: 'smith',
                       age: 25,
                       organisation: 'IS'
                   },
                       {
                           firstName: 'Jane',
                           lastName: 'Doe',
                           age: 30,
                           organisation: 'IS'
                       }];
                   deferred.resolve(result);
               }
               deferred.reject("Error: no results were found");
           },1000);
           return deferred.promise;
       };
        return{
            getContacts:_getContacts
        };

    });
