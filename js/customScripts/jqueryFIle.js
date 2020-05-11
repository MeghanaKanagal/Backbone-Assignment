define(['jquery', 'methods'], function($, methods){
    $('#clickme').click(function(){
        methods.changeHTML('I was clicked!!!!');
    })
   $('#clickme').click(function(){
        methods.showAlert('I was clicked!!!!');
    })

});