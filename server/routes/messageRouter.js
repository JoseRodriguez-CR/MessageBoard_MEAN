const express = require( 'express' );
const {MessageController} = require( '../controllers/messageController.js' );
const MessageRouter = express.Router();

MessageRouter
    .get('/', MessageController.loadIndex );

MessageRouter   
    .post("/message", MessageController.createMessage );




module.exports = { MessageRouter };