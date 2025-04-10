import { Request, Response } from "express";
import { HealthCheckService } from "@/services";

const healthService = new HealthCheckService();

export const getHealthCheck = (req: Request, res: Response) => {
    const uptimeData = healthService.calculateUptime();
    res.json(uptimeData);
};