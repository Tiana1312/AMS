import { Request, Response } from "express";
import { calculateUptime } from "../services/healthCheckServices";

function getHealthStatus(req: Request, res: Response){
    const uptimeData = calculateUptime();
    res.json(uptimeData);
};

export { getHealthStatus }