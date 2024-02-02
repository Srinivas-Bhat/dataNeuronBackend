const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require("cors");
const addRouter = require('./Routes/AddData');

const app = express();
app.use(bodyParser.json());
app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );
app.use(express.json());
const PORT = process.env.PORT || 8000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Srinivas:srinivasbhat@cluster0.uiww1zj.mongodb.net/dataNeuron?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use("/", addRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});