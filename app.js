var express = require("express");
var swig = require("swig");
var app = express();

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use("/lib", express.static("bower_components"));
app.use("/assets", express.static("assets"))

app.get("/", function(req, res){
	res.send("hello");
});
app.get("/game", function(req, res){
	res.render("game.html");
});

var server = app.listen(3003, function() {
	console.log("start server");
});
