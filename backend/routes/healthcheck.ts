import { Router } from "express";
import healthCheckController from "../controllers/healthcheck";

const router = Router();

router.get("/", healthCheckController.healthcheck);

export default router;