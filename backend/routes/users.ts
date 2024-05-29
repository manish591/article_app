import { Router } from "express";
import authenticate from "../middlewares/auth";
import usersController from "../controllers/users";
import usersValidator from "../middlewares/validators/users";

const router = Router();

router.get(
  "/self", 
  authenticate, 
  usersController.getSelfDetails
);
router.get(
  "/:username", 
  authenticate, 
  usersController.getUserByUsername
);
router.patch(
  "/self", 
  authenticate, 
  usersValidator.validateUserDetailsUpdateBody, 
  usersController.updateSelfDetails
);
router.delete(
  "/self", 
  authenticate
);

export default router;