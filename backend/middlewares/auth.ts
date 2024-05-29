import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { verifyJwt } from "../utils/jwt";
import logger from "../utils/logger";

const prisma = new PrismaClient();

async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const authParts = req.headers.authorization?.split(" ");

    if(!authParts || authParts.length != 2 || authParts[0] != "Bearer" || !authParts[1]) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "unauthorized",
        data: {},
        meta: {}
      });
    }

    const token = authParts[1];
    const userData = verifyJwt(token) as JwtPayload;

    if(!userData?.id) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "unauthorized",
        data: {},
        meta: {}
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        id: userData.id
      }
    });

    if(!user) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "unauthorized",
        data: {},
        meta: {}
      });
    }

    res.locals.user = user;
    next();
  } catch(err) {
    logger.error("the error", err);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "An internal server error occured",
      data: {},
      meta: {}
    });
  }
}

export default authenticate;
