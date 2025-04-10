import { Request, Response } from "express";
import { HealthCheckService } from "@/services";

export class HealthCheckController {
    private healthService: HealthCheckService;

    constructor() {
        this.healthService = new HealthCheckService();
    }
    
    getHealthCheck(req: Request, res: Response) {
        const uptimeData = this.healthService.calculateUptime();
        res.send(uptimeData);
    } 
};