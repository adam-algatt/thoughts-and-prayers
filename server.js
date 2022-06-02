const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Not so secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

const hbs =exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
// if force is set to 'true' in sequelize.sync the tables recreate if there
// is a new association created
