"use strict";
//this defines the healthcheck route and connect it to the controller
const express = require("express");
const router = express.Router();
const healthCheckController = require("../controllers/healthCheckController");
router.get("/", healthCheckController.getHealthStatus);
module.exports = router;
//# sourceMappingURL=healthCheckRoutes.js.map