var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var firebase = require("firebase");

var puerto = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

app.listen(puerto, function() {
  console.log("Node server running on " + puerto);
});