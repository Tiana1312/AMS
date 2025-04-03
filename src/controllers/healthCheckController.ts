import { Request, Response } from "express";
const healthCheckService = require("../services/healthCheckServices");

exports.getHealthStatus = (req: 
    Request, res: Response) => {
        const uptimeData = 
    healthCheckService.calculateUptime();
        res.json(uptimeData);
};