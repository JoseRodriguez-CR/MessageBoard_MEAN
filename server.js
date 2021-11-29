const express = require( 'express' );
const path = require("path");
const {MessageRouter} = require( './server/routes/messageRouter');

//const bodyParser = require("body-parser");

const session = require( 'express-session' );
const flash = require( 'express-flash' );
const { CommentRouter } = require('./server/routes/commentRouter');


const app = express();



//app.use(bodyParser.urlencoded());
app.set("views", __dirname + "/client/views");  // need to be updated when move views
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/client/static"));
app.use(flash());
app.use( express.urlencoded({extended:true}) );
app.use(session({
    secret: "quotes",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
    }));

//Connecting Routers
app.use( '/', MessageRouter );
app.use( '/', CommentRouter );

//Database connection
require( './server/config/database' );




/*

app.post("/comment/:id", function(req, res) {
	const messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const newComment = new Comment({ name: req.body.name, text: req.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index.ejs', { errors: newComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});
*/

app.listen(8080, function() {
	console.log("server running on port 8080");
});




