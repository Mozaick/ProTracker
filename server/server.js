const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const activitiesRouter = require('./routes/activitiesRoute');

const app = express();

/* Loading the environment variables from the .env file. */
require('dotenv').config();

const PORT = process.env.PORT || 7000;
const MONGODB_URI = process.env.MONGODB_URI;

/* Allowing the frontend to access the backend. */
app.use(cors());

/* Telling the application to use the express.json() middleware. This middleware will parse the body of
any request that has a Content-Type of application/json. */
app.use(express.json());

/* This is a route handler. It is listening for a GET request to the root route of the application.
When it receives a request, it will send back a response with the string "Hello World!". */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', activitiesRouter);

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(
      PORT,
      console.log('📣 Server listening on port 7000 successfully!!')
    );
  })
  .catch(err => {
    console.log(err);
  });
