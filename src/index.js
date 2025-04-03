// console.log("Project Initialized Successfully!");
// Thi is the main app setup. It initializes express and load routes
//import express, { Request, Response } from 'express';
//import healthCheckRoutes from './routes/healthCheckRoutes';
//const express = require("express")
var app = express();
//const app = require("./src/index.js");
var PORT = process.env.PORT || 7000;
var healthCheckRoutes = require("./routes/healthCheckRoutes");
app.use(express.json()); //enable JSON parsing in the request body
app.use('/healthCheck', healthCheckRoutes);
app.listen(PORT, function () {
    console.log("Server is running at http://localhost:".concat(PORT));
});
module.exports = app;
