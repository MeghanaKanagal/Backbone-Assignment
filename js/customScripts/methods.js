define(['jquery'], function($){
    var methods = {};

    methods.changeHTML = function(args){
       $('body').html(args);
    }

    methods.showAlert = function(args){
       alert(args);
    }

    return methods;
});