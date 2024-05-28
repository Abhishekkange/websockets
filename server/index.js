const express = require('express');
const app = express();
const port = 4500;
const http = require('http');
const {Server} = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket)=>{

    socket.on('new-user-joined',(name)=>{

        console.log("new user has joined"+name);
        socket.broadcast.emit('user-joined',name);

    })

    //get chat from user and broadcast it to other users
    socket.on('sendMessage',(message)=>{

        console.log("message recieved  "+ message);
        socket.broadcast.emit('recieved',message);
    })


})




server.listen(port,()=>{

    console.log('listening at port '+port);

});