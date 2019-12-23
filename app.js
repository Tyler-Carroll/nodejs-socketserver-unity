var io = require('socket.io')(process.env.PORT || 4567);
var shortID = require('shortid');
//Custom Classes
var Marker = require('./Classes/Marker.js');

console.log('Server has started');

var markers = [];
var sockets = [];

var connections = 0;

io.on('connection', function(socket) {
    console.log('Connection made');
    var marker = new Marker();

    //marker id is equal to the order of which it was created;
    marker.id = connections;
    connections++; 
    var thisMarkerID = marker.id;

    markers[thisMarkerID] = marker;
    sockets[thisMarkerID] = socket;

    //Tell the client that this our id for the server
    socket.emit('register', {id: thisMarkerID});
    socket.emit('spawn', marker); //tell myself i have spawned

    socket.broadcast.emit
    socket.on('disconnect', function() {
        console.log('Player disconnected');
    })


});