const mongoose = require( 'mongoose' );


const CommentSchema = new mongoose.Schema({
	name: { 
        type: String,
        required : true //'Name cannot be blank',
    },
	comment: {
        type: String,
        required : true  //'Comment cannot be blank'
    }
});

//Next command will create the comments collection in MongoDB
const Comment = mongoose.model( 'comments', CommentSchema );


const CommentModel = {
    createComment : function( newComment ){
        return Comment.create( newComment );
    },
    getComments : function(){
        return Comment.find();
    }
};

module.exports = {CommentModel, CommentSchema};


