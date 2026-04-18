import { Server } from "socket.io";

const io = new Server(3001, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("study-update", (data) => {
    socket.broadcast.emit("study-update", data);
  });
});