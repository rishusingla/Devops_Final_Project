require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");

const app=require('./src/app')
const connectDB = require("./src/config/db");

 const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

global.io = io;
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});
connectDB();

 server.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
// const PORT = process.env.PORT || 5000;
// app.get("/", (req, res) => {
//   res.send("Backend is running successfully");
// });
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
