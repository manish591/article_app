import { Request, Response, NextFunction } from "express"; 
import zod from "zod";
import logger from "../../utils/logger";

async function validateUserDetailsUpdateBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      bio: zod.string().optional(),
      avatar: zod.string().url().optional()
    }).strict();

    await schema.parseAsync(req.body);
    next();
  } catch(err) {
    logger.error(err);
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Bad Request: Invalid body",
      data: {},
      meta: {}
    });
  }
}

export default {
  validateUserDetailsUpdateBody
};
