/** @format */

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 8080;
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "index.html")));
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.render("index.html");
});
const io = socketio(server);
io.on("connection", (sock) => {
  console.log(sock);
});
server.on("err", (err) => {
  console.log(err);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
