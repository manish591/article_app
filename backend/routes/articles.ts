import { Router } from "express";
import authenticate from "../middlewares/auth";
import validator from "../middlewares/validators/articles";
import controller from "../controllers/articles";

const router = Router();

router.get("/", authenticate, controller.getArticles);
router.get("/:slug", authenticate, controller.getSingleArticle);
router.delete("/:slug", authenticate, controller.deleteArticle);
router.post("/", authenticate, validator.validateCreateArticleBody, controller.createArticle);
router.patch("/:slug", authenticate, validator.validateUpdateArticleBody, controller.updateArticle);

export default router;