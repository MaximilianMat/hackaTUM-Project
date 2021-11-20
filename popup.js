let button = document.getElementById("start");

button.addEventListener("click", async () => {

    var socket = io("http://localhost:3000/", {
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd"
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

