/*const { request, response } = require('express');*/
const {CommentModel} = require( './../models/commentModel' )
const {MessageModel} = require( './../models/messageModel' )

const CommentController ={
    /*
    loadIndex : function( request, response ){
        MessageModel.getMessages()
        .then( result =>  {
            console.log(result);
            response.render( 'index', {messages: result});
        }) 
    },*/
    createComment : function(request, response){
        console.log( 'Testing comment POST', request.body );
        /*CommentModel.createComment( request.body )
        
        .then( result =>{
            console.log(result);
            console.log( result.name , result.comment)
            request.session.name = result.name;
            request.session.comment = result.comment;
            console.log("OK");
            response.redirect( '/' );
        })
        .catch( error => {
            request.flash( 'commentError', 'Your comment has an error or it is in blank!' );
            response.redirect( '/' );
        });*/

        let name = request.body.name;
        let comment = request.body.comment;
        let messageName = request.session.name;  // it could give an error

        MessageModel
            .getMessageById( messageName )
            .then( messageResult => {
                let newComment = {
                    name,
                    comment
                };
                MessageModel
                    .updateCommentMessage( messageResult._id, newComment )
                    .then( result => {
                        response.redirect( '/' );
                    });
            });
        
    }
}


module.exports = { CommentController };