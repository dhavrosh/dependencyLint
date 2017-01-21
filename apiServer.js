"use strict";

const http = require('http');
const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();
const server = new http.Server(app);

const db = require('./db/sublevels');

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url} from ${req.headers['user-agent']}`);
  next();
});

app.get('/authors', (req, res, next) => {
  const data = Object.keys(AUTHORS).map(id => {
    return {
      'id': id,
      'name': AUTHORS[id].name
    };
  });

  res.json(data);
});

app.post('/interpret', (req, res, next) => {
  let result;

  try {
    result = eval(req.body.code);
  } catch (err) {
    result = err;
  }
  finally {
    res.end(result);
  }
});

app.get('/authors/:id', (req, res, next) => {
  if (!AUTHORS.hasOwnProperty(req.params.id)) {
    return next();
  }

  const data = AUTHORS[req.params.id];
  res.json(data);
});

server.listen(3001, (err) => {
  if (err) {
    return console.error(err);
  }
  console.info('API Server running on http://localhost:3001');
});
