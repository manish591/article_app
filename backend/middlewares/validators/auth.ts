import { Request, Response, NextFunction } from "express"; 
import logger from "../../utils/logger";
import zod from "zod";

async function validateSignupData(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      first_name: zod.string(),
      last_name: zod.string(),
      email: zod.string().email(),
      password: zod.string().min(6)
    });
    await schema.parseAsync(req.body);
    next();
  } catch(err) {
    logger.error(err);
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Bad Request: Invalid signup body",
      data: {},
      meta: {}
    });
  }
}

async function validateSigninData(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      email: zod.string().email(),
      password: zod.string().min(6)
    });

    await schema.parseAsync(req.body);
    next();
  } catch(err) {
    logger.error("Error validaring signin data");
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Bad Request: Invalid singin body",
      data: {},
      meta: {}
    });
  }
}

export default {
  validateSignupData,
  validateSigninData
};
