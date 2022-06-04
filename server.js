const path = require('path');
const express = require('express');
const routes = require('./api');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { Reaction, Thought, User } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGOD_URI || 'mongodb://127.0.0.1:27017/Thoughtdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set('debug', true);

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});

