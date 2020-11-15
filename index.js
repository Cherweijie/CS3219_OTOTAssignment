
const serverless = require('serverless-http');
// Import express
let express = require("express");
// Import Body parser
let bodyParser = require("body-parser");
// Import Mongoose
let mongoose = require("mongoose");
// Initialise the app
let app = express();
let contactController = require('./contactController');

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable

if (process.env.DB != null) {
  mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true,});
} else {
  mongoose.connect("mongodb://localhost/contacts", { useNewUrlParser: true });
}

var db = mongoose.connection;

// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express with nodemon"));

// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running RestContacts on port " + port);
});

module.exports = app;
module.exports.handler = serverless(app);