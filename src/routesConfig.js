"use strict";

const Index = require('./components/index');
const AuthorPage = require('./components/authorPage');
const NotFound = require('./components/notFound');

const routesConfig = [
  {path: '/', component: Index },
  {path: '/author/:id', component: AuthorPage},
  {path: '*', component: NotFound}
];

module.exports = routesConfig;
