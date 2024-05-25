import { Router } from "express";
import healthCheckRouter from "./healthcheck";
import authRouter from "./auth";
import userRouter from "./user";

const router = Router();
router.use("/healthcheck", healthCheckRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;