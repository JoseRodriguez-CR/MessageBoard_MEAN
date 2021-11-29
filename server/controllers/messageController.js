/*const { request, response } = require('express');*/
const {MessageModel} = require( './../models/messageModel' )

const MessageController ={
    loadIndex : function( request, response ){
        MessageModel.getMessages()
        .then( result =>  {
            console.log(result);
            response.render( 'index', {messages: result});
        }) 
    },
    createMessage : function(request, response){
        console.log( 'Testing message POST', request.body );
        MessageModel.createMessage( request.body )
        
        .then( result =>{
            console.log(result);
            console.log( result.name , result.message)
            request.session.name = result.name;
            request.session.message = result.message;
            console.log("OK");
            response.redirect( '/' );
        })
        .catch( error => {
            request.flash( 'messageError', 'Your message has an error or it is in blank!' );
            response.redirect( '/' );
        });
    }
}


module.exports = { MessageController };