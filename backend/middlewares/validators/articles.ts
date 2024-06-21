import { Request, Response, NextFunction } from "express";
import zod from "zod";
import logger from "../../utils/logger";

async function validateCreateArticleBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      title: zod.string(),
      subtitle: zod.string().optional(),
      content: zod.string().optional(),
    }).strict();

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

async function validateGetArticleQueryParams(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      username: zod.string().optional(),
      sort: zod.string().optional(),
      page: zod.number().optional()
    });

    await schema.parseAsync(req.query);
    next();
  } catch(err) {
    logger.error(err);
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Bad Request: Invalid query params body",
      data: {},
      meta: {}
    });
  }
}

async function validateUpdateArticleBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema = zod.object({
      title: zod.string().optional(),
      subtitle: zod.string().optional(),
      content: zod.string().optional()
    }).strict();

    await schema.parseAsync(req.body);
    next();
  } catch(err) {
    logger.error(err);
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Bad Request: Invalid query params body",
      data: {},
      meta: {}
    });
  }
}

export default {
  validateCreateArticleBody,
  validateGetArticleQueryParams,
  validateUpdateArticleBody
};
