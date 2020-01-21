const express = require('express');
const app = express();
const http = require('http');

//deifining routes
const homeRoute = require("./api/routes/home");

app.use("/", homeRoute);

module.exports = app;