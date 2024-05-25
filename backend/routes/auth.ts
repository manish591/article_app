import { Router } from "express";
import authValidator from "../middlewares/validators/auth";
import authController from "../controllers/auth";

const router = Router();

router.post("/signup", authValidator.validateSignupData, authController.signup);
router.post("/signin", authValidator.validateSigninData, authController.singin);
router.get("/signout", authController.signout);

export default router;