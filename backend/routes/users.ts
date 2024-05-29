import { Router } from "express";
import authenticate from "../middlewares/auth";
import usersController from "../controllers/users";

const router = Router();

router.get("/self", authenticate, usersController.getSelfDetails);
router.get("/:username", authenticate, usersController.getUserByUsername);
router.patch("/self", authenticate);
router.delete("/self", authenticate);

export default router;