
'use strict'
angular
    .module('promise contact app')
    .filter('labelCase',function(){
        return function(input){
            input= input.replace(/([A-Z])/g,' $1');
            return input[0].toUpperCase() + input.slice(1);
        }})
    .filter('nameCase',function(){
        return function(input) {
            // return input=='IS' ?  'Inter Sources': 'hi';
            if(isNaN(input)) {
                return input[0].toUpperCase() + input.slice(1).toLowerCase();
            }
            else return input;
        }    });