import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { verifyJwt } from "../utils/jwt";

const prisma = new PrismaClient();

async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;

    if(!token || token.split(" ").length < 2 || token.split(" ")[1]) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "unauthorized",
        data: {},
        meta: {}
      });
    }

    const userData: JwtPayload = verifyJwt(token);

    if(!userData.id) {
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