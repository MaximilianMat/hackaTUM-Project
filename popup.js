let button = document.getElementById("start");

button.addEventListener("click", async () => {

    var socket = io("https://localhost:8080/", {
        withCredentials: true,
        extraHeaders: {
             'Access-Control-Allow-Origin': 'https://localhost'
        }
    });

    var button = document.getElementById('start');
    socket.on("connect", () => {
        console.log(hi);
    });
    socket.emit('ready', '');

    socket.on('execute function', function (msg) {
        socket.emit('execution finished', eval(msg))
    });
    button.textContent = "Starting..."
    button.style = "background-color: grey"
    //connect
});

function calculating() {
    button.textContent = "Calculating..."
    button.style = "background-color: grey"
}

