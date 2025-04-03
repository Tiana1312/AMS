//this defines the healthcheck route and connect it to the controller
var express = require("express");
var router = express.Router();
var healthCheckController = require("../controllers/healthCheckController");
router.get("/", healthCheckController.getHealthStatus);
module.exports = router;
