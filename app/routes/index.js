const Router = require('express').Router();
const apiRoutes = require('./api');

Router.use('/api', apiRoutes);

Router.use((req, res) => {
  res.status(404);
  res.send('<h3>ERROR: Status Code 404 ( Routes not found )<h3>')
});

module.exports = Router;