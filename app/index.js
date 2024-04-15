const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();
const server = app.listen(3000, () => {
    console.log("Server started");
});
const io = socketIO(server);
app.use(express.static(path.join(__dirname)));
io.on('connection',socket=>{
    console.log("A user connected");
    socket.on('join',username=>{
        socket.username=username;
        io.emit('chat message',{type:'notification', message:`$(username) has joined the chat`});
    });
    socket.on('chat message', msg=>{
        io.emit('chat message',{type:'message', username:socket.username,message:msg});
    });
    socket.on('disconnect',()=>{
 
})
})
