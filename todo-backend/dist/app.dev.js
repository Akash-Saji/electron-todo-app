"use strict";

var express = require("express");

var mongoose = require('mongoose');

var cors = require('cors');

var app = express();

var swaggerJsdoc = require("swagger-jsdoc");

var swaggerUi = require("swagger-ui-express");

var Todo = require('./model/todomodel');

var todoroute = require('./routes/todoroute');

app.use(cors());
app.use(express.json());
var mongoDB = 'mongodb://127.0.0.1:27017/my_database';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
var options = {
  definition: {
    openapi: "3.0.0",
    servers: [{
      url: "http://localhost:3000/"
    }]
  },
  apis: ["./routes/*.js"]
};
var swaggerDocs = swaggerJsdoc(options);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/todo', todoroute);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});