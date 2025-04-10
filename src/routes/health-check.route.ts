import express from "express";
import { HealthCheckController } from "@/controllers";

const controller = new HealthCheckController()

const router = express.Router();

router.get("/health-check", (req, res) => controller.getHealthCheck(req, res));

export { router }