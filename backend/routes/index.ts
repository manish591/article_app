import { Router } from "express";
import healthCheckRouter from "./healthcheck";
import authRouter from "./auth";

const router = Router();
router.use("/healthcheck", healthCheckRouter);
router.use("/auth", authRouter);

export default router;