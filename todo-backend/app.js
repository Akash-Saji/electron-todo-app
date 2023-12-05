const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const swaggaerdoc = require("swagger-jsdoc");  
const swaggerui = require("swagger-ui-express");  

app.use(cors());
app.use(express.json());

const mongoDB = 'mongodb://127.0.0.1:27017/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const todoroute = require('./routes/todo');
app.use('/todo', todoroute);

const options = {
    definition: {
      openapi: "3.0.0",
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
const  swaggaerd = swaggaerdoc(options);
app.use(
    "/api/docs",
    swaggerui.serve,
    swaggerui.setup(swaggaerd)
  );
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
