const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const activitiesRouter = require('./routes/activitiesRoute');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 7000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Protracker Application!');
});

app.use('/api', activitiesRouter);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(
      PORT,
      console.log(`📣 Server listening on port ${PORT} successfully!!`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
