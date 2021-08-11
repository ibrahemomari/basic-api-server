"use strict";

// requiers
const express = require("express");
const notFoundHandler = require("./error-handler/404");
const errorHandler = require("./error-handler/500");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
const routes = require("./routes/foods");
const routes2 = require("./routes/clothes");

const app = express();

app.use(express.json());
app.use(logger);
app.use(routes);
app.use(routes2);

const start = (port) => {
  app.listen(port, () => {
    console.log(`The server start running at port ${port}`);
  });
};

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};
