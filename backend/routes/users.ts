import { Router } from "express";
import authenticate from "../middlewares/auth";
import controller from "../controllers/users";
import validator from "../middlewares/validators/users";

const router = Router();

router.get("/self", authenticate, controller.getSelfDetails);
router.get("/:username", authenticate, controller.getUserByUsername);
router.patch("/self", authenticate, validator.validateUserDetailsUpdateBody, controller.updateSelfDetails);

export default router;