import { Router, Request, Response } from "express";

const router = Router();

router.get("/", function(req: Request, res: Response) {
  res.json({
    uptime: new Date(),
  });
});

export default router;