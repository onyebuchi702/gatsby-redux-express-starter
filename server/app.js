const express = require('express')
const gatsbyExpress = require('gatsby-plugin-express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000

const contentful = require('./routes/contentful');

app.all(/\/api\/.*/, function (req, res, next) {
	req.url = req.originalUrl.replace('/api/', '/');
	next();
});

app.all(/^\/api$/, function (req, res, next) {
	req.url = req.originalUrl.replace('/api', '/');
	next();
});

//Allow cross-origin
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/contentful', contentful);

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(gatsbyExpress('config/gatsby-express.json', {
  publicDir: 'public/',

  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true,
}));

app.listen(PORT, () => console.log(`gatsby redux app is listening on port ${PORT}!`))
