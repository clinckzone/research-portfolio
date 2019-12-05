var express = require("express");
var server = express();

server.set('view engine', "pug");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.use(express.static(__dirname + "/css"));
server.use(express.static(__dirname + "/images"));
server.use(express.static(__dirname + "/scripts"));
server.use(express.static(__dirname + "/data"));

server.get("/", function(req, res) {
  res.render("index", {
    title: "Home",
  });
});

server.listen(port, function() {
  console.log("Server is running on " +port);
});