var express = require("express");
var projects = require("./routes/projects");
var blog = require("./routes/blog");
var server = express();

var ARTICLES = require("./data/articles");
var PROJECTS = require("./data/projects");

server.set('view engine', "pug");
server.use(express.static(__dirname + "/css"));
server.use(express.static(__dirname + "/images"));
server.use(express.static(__dirname + "/scripts"));
server.use(express.static(__dirname + "/data"));

server.use("/projects", projects);
server.use("/blog", blog);

server.get("/", function(req, res) {
  res.render("index", {
    title: 'Home',
    stylesheet:'index.css',
    projects: PROJECTS,
    articles: ARTICLES
  });
});

server.get("/about", function(req, res) {
  res.render("about", {
    title: 'About',
    stylesheet: 'page.css'
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.listen(port, function() {
  console.log("Server is running on " +port);
});