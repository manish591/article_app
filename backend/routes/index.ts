import { Router } from "express";
import healthCheckRouter from "./healthcheck";

const router = Router();
router.use("/healthcheck", healthCheckRouter);

export default router;