const io = require('socket.io')();

io.on('connection', socket => {
    console.log('User Connected')
    socket.on("message", message => {
        io.emit("message", message)
    })
})

io.listen(3001);