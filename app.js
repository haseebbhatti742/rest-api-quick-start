const express = require('express');
const app = express();
const http = require('http');

//deifining routes
const indexRoute = require("./api/routes/index");

app.use("/", indexRoute);

module.exports = app;