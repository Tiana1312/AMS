import express from "express";
import { getHealthStatus } from "@/controllers";

const router = express.Router();

router.get("/", getHealthStatus);

export { router }