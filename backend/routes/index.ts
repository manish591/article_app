import { Router } from "express";
import healthCheckRouter from "./healthcheck";
import authRouter from "./auth";
import usersRouter from "./users";
import articlesRouter from "./articles";

const router = Router();
router.use("/healthcheck", healthCheckRouter);
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/articles", articlesRouter);

export default router;