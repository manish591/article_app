import { Router } from "express";
import authenticate from "../middlewares/auth";
import usersController from "../controllers/users";

const router = Router();

/**
 * 1. get self details, it will return details of the user that is logged in. we will use this to populate whether user is logged
 * in in the frontend or not.
 * 2. Get user by username. this will be used to get the profile of the user
 * 3. update profile, we will have an settings page that will allow us to update variouse user details from time to time
 * 4. Delete profile
 */

router.get("/self", authenticate, usersController.getSelfDetails);
router.get("/username", authenticate);
router.patch("/self", authenticate);
router.delete("/self", authenticate);

export default router;