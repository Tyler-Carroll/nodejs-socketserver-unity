var io = require('socket.io')(process.env.PORT || 4567);
var shortID = require('shortid');
//Custom Classes
var Marker = require('./Classes/Marker.js');

console.log('Server has started');


var markers = ['Headf', 'chestR'];
var sockets = [];


io.on('connection', function(socket) {
    console.log('Connection made');

    socket.emit('register', {'markernames': markers})
    var marker = new Marker();

    //marker id is equal to the order of which it was created;
    marker.id = shortID.generate();
    
    var thisMarkerID = marker.id;

    markers[thisMarkerID] = marker;
    sockets[thisMarkerID] = socket;

    //Tell the client that this our id for the server
    
    //if the client that was connected is not in the list of marker names we can disconnect it
    //else we will give it an ID

    socket.on('disconnect', function() {
        console.log('Application Disconnected');
    })
});