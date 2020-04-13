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
const users = [];
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    socket.on('login', function(data){
        var msg = JSON.parse(data);
        users.push(msg.userId);
        console.log('login', msg.userId)
        socket.emit('login', { 
            type: "login", 
            success: true,
            initiated: users.length > 1
        });
    });

    socket.on('offer', function(data){
        console.log('offer', JSON.parse(data).userId)
        socket.broadcast.emit('offer', data);
    });

    socket.on('answer', function(data){
        console.log('answer', JSON.parse(data).userId)
        socket.broadcast.emit('answer', data);
    });

    socket.on('leave', function(data){
        
        var msg = JSON.parse(data);
        console.log('leave', JSON.parse(data).userId)
        let index = users.indexOf(msg.userId);
        users.splice(index, index+1);
        data.initiated = users.length > 1;
        socket.emit('leave', data);
    });

    socket.on('candidate', function(data){
        console.log('candidate', JSON.parse(data).userId)
        socket.broadcast.emit('candidate', data);
    });

});

io.on("close", function() { 
    socket.broadcast.emit('leave', data);
});  