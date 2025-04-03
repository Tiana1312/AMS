"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const healthCheckService = require("../services/healthCheckServices");
exports.getHealthStatus = (req, res) => {
    const uptimeData = healthCheckService.calculateUptime();
    res.json(uptimeData);
};
//# sourceMappingURL=healthCheckController.js.map