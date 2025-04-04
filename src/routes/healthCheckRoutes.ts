import express from "express";
import { getHealthStatus } from "../controllers/healthCheckController";

const router = express.Router();

router.get("/", getHealthStatus);

export { router }