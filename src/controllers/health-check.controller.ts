import { Request, Response } from "express";
import { HealthCheckService } from "@/services";

export class HealthCheckController {
    constructor(
        private healthService = new HealthCheckService()
    ) {}
    
    getHealthCheck(req: Request, res: Response) {
        const uptimeData = this.healthService.calculateUptime();
        res.status(200).json(uptimeData);
    } 
};
