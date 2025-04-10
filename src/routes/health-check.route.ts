import express from "express";
import { getHealthCheck } from "@/controllers";

const router = express.Router();

router.get("/", getHealthCheck);

export { router }