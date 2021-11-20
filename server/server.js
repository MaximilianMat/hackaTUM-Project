const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "https://localhost",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
const port = process.env.PORT || 8080;


io.on('connection', (socket) => {
    socket.on('ready', function () {
        socket.emit('execute function', fun.toString() + ";fun();");
    });
    socket.on('execution finished', function (res) {
        console.log(res);
    });
});



http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});


function fun() {
    var n = 10000000;
    var sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}