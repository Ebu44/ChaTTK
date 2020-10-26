const http = require("http");
const socketio = require("socket.io");

const server = http.createServer((req, res) => {
  res.end("Hey!");
});

server.listen(8000);

const io = socketio.listen(server);

io.sockets.on("connection", (socket) => {
  console.log("Kullanıcı Bağlandı.");

  socket.on("chat message", (data) => {
    console.log(data);
    socket.emit("hi", { data });
  });

  socket.on("disconnect", () => {
    console.log("Kullanıcı Ayrıldı");
  });
});
