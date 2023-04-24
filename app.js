const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); // Content-Type: application/json (for POST requests)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow access to any client, this is a security feature to prevent cross origin resource sharing (CORS) errors
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // allow these methods to be used
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // allow these headers to be used
  next();
});

app.use('/feed', feedRoutes); // only forward requests that start with '/feed' to feedRoutes, e.g. /feed/posts

app.listen(8080, function() {
  console.log('Server is running on http://localhost:8080');
});