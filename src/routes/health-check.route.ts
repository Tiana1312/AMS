import express from "express";
import { healthCheckController } from "@/controllers";

const controller = new healthCheckController
const router = express.Router();

router.get("/", controller.healthController);

export { router }