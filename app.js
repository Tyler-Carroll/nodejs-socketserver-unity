var io = require('socket.io')(process.env.PORT || 4567);
var shortID = require('shortid');
//Custom Classes
var Marker = require('./Classes/Marker.js');

console.log('Server has started');

var markernames = ['Headf', 'chestR'];

io.on('connection', function(socket) {
    console.log('Connection made');

    socket.emit('register', {'markernames': markernames})
    var marker = new Marker();

    //markers[thisMarkerID] = marker;
    //sockets[thisMarkerID] = socket;

    setInterval(() => {
        var rando = Math.floor(Math.random() * 101)
        socket.emit('MyData', rando)
    }, 10);

    //Tell the client that this our id for the server
    
    //if the client that was connected is not in the list of marker names we can disconnect it
    //else we will give it an ID

    socket.on('disconnect', function() {
        console.log('Application Disconnected');
    })
});