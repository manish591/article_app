import { Router } from "express";

const router = Router();

//get user's info like is logged in etc
router.get("/self");
router.get("/username");

export default router;