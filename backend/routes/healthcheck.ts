import { Router } from "express";
import controller from "../controllers/healthcheck";

const router = Router();

router.get("/", controller.healthcheck);

export default router;