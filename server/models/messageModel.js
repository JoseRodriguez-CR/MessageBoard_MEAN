const mongoose = require('mongoose');
const {CommentSchema, CommentModel} = require( './commentModel' );


const MessageSchema = new mongoose.Schema({
	name: { 
        type: String,
        required : true //'Name cannot be blank',
    },
	message: {
        type: String,
        required : true  //'Comment cannot be blank'
    },
	comments: [ CommentSchema ]
});

//Next command will create the comments collection in MongoDB
const Message = mongoose.model( 'messages', MessageSchema );

const MessageModel = {
    createMessage : function( newMessage ){
        return Message.create( newMessage );
    },
    getMessages : function(){
        return Message.find();
    },
    getMessageById : function( messageName ){
        return Message.findOne({ messageName });
    },
    updateCommentMessage : function( id, newComment ){
        return CommentModel.createComment( newComment )
            .then( result => {
                return Message.findByIdAndUpdate({_id: id}, {$push: {comments: result}});
            });
    }
};

module.exports = {MessageModel};
