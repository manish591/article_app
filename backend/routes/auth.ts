import { Router } from "express";
import validator from "../middlewares/validators/auth";
import controller from "../controllers/auth";

const router = Router();

router.get("/signout", controller.signout);
router.post("/signup", validator.validateSignupData, controller.signup);
router.post("/signin", validator.validateSigninData, controller.singin);

export default router;