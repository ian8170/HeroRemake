var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server)

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(client) {
    client.emit("message", "you are connected");
});

io.on("login", function(data) {
	client.emit("message", "you are connected");
    console.log(data.email);
});

server.listen(8000);
