// index.js

/**
 * Required External Modules
 */
const express = require("express");
var socket = require('socket.io');
const cors = require('cors')
const bodyParser = require('body-parser');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').Server(app);

/**
 *  App Configuration
 */
// app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser());
app.use(cors())
app.use(express.static('dist'))

/**
 * Routes Definitions
 */


app.post("/login", (req, res) => {

    res.send({
        username : req.body.username,
        userId : Date.now(),
        token: 'sdsd-asdas-dasdqwezd21-asd-asdsadasd'
    });
});


app.get("/session/main.js", (req, res) => {
    res.sendFile(__dirname + '/dist/main.js');
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});


/**
 * Server Activation
 */
http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});


/**
* Socket setup & pass server
*/
var io = socket(http);
io.on('connection', (socket) => {
    console.log("new user ", socket.id);
    
    io.sockets.emit("user-joined", socket.id, io.engine.clientsCount, Object.keys(io.sockets.clients().sockets));

	socket.on('signal', (toId, message) => {
		io.to(toId).emit('signal', socket.id, message);
  	});

    socket.on("message", function(data){
		io.sockets.emit("broadcast-message", socket.id, data);
    })

	socket.on('disconnect', function() {
		io.sockets.emit("user-left", socket.id);
	})
}); 