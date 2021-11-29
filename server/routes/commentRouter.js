const express = require( 'express' );
const {CommentController} = require( '../controllers/commentController' );
const CommentRouter = express.Router();


CommentRouter
    .post('/comment/:id', CommentController.createComment );
    
module.exports = { CommentRouter };

