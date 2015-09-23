var express = require("express");
var swig = require("swig");
var app = express();

var PORT = process.env.PORT || 3003;

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use("/lib", express.static("bower_components"));
app.use("/assets", express.static("assets"))

app.get("/", function(req, res){
	res.render("index.html");
});
app.get("/game", function(req, res){
	res.render("game.html");
});

var server = app.listen(PORT, function() {
	console.log("start server @ ", PORT);
});
