const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const URI = process.env.ATLAS_URI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

const db = mongoose.connection;

// Handle MongoDB connection errors
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Handle MongoDB connection success
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const excerciseRouter = require("./Routes/excercise");
const userRoutes = require("./Routes/users");


app.use('/excercises',excerciseRouter);
app.use("/User",userRoutes);


app.listen(port,console.log(`Running on port: ${port} `));
