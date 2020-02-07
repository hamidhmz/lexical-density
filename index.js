const express = require("express");
const mongoose = require("mongoose");
const { logger } = require("./startup/logging");
const startupRoutes = require("./startup/routes");
const startupDb = require("./startup/db");
const startupConfig = require("./startup/config");
const startupValidation = require("./startup/validation");
const startupProd = require("./startup/prod");
const config = require("config");

const app = express();

startupRoutes(app);
startupDb(mongoose);
startupConfig();
startupValidation();
startupProd(app);
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(config.get("PORT"), () =>
  logger.info(`Listening on port ${config.get("PORT")}...`)
);
