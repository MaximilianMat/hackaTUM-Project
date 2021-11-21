let button = document.getElementById("start");

button.addEventListener("click", async () => {

    var socket = io("http://localhost:3000/", {
        withCredentials: true,
        extraHeaders: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });

    socket.on("connect", () => {
        socket.emit('ready', '');
    });

    socket.on('execute function', function (msg) {
        socket.emit('execution finished', eval(msg))
    });
    button.textContent = "Connecting..."
    button.style = "background-color: grey"
    //connect
});

function calculating() {
    button.textContent = "Calculating..."
    button.style = "background-color: grey"
}

