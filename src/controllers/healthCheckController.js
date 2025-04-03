"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var healthCheckService = require("../services/healthCheckServices");
exports.getHealthStatus = function (req, res) {
    var uptimeData = healthCheckService.calculateUptime();
    res.json(uptimeData);
};
