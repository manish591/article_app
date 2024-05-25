import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger";
import { generateUsername } from "../utils/generateUsername";
import { hashPassword, verifyPassword } from "../utils/password";
import { signJwt } from "../utils/jwt";
import { ACESSS_TOKEN_COOKIE_NAME } from "../utils/constants";

const prisma = new PrismaClient();

async function signup(req: Request, res: Response) {
  try {
    const { first_name, last_name, email, password } = req.body;

    const isEmailExists = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if(isEmailExists) {
      res.status(409).json({
        status: "error",
        code: 409,
        message: "user already exists",
        data: {},
        meta: {}
      });
    }

    const hashedPassword = await hashPassword(password);
    const uniqueUsername = generateUsername(first_name, last_name);

    const userData = await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
        password: hashedPassword,
        username: uniqueUsername,
        created_at: new Date(),
        updated_at: new Date()
      },
      select: {
        first_name: true,
        last_name: true,
        username: true,
        created_at: true,
        updated_at: true
      }
    });

    res.status(201).json({
      status: "success",
      code: 201,
      message: "successfully created account",
      data: {
        ...userData
      },
      meta: {}
    });
  } catch(err) {
    logger.error("Failed to signup, internal server error");
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error occured",
      data: {},
      meta: {}
    });
  }
}

async function singin(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if(!user) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "User not found",
        data: {},
        meta: {}
      });
    }

    const isPasswordCorrect = await verifyPassword(user.password, password);

    if(!isPasswordCorrect) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Unauthorized",
        data: {},
        meta: {}
      });
    }

    const token = signJwt({ id: user.id });

    res.cookie(ACESSS_TOKEN_COOKIE_NAME, token, {
      sameSite: "lax",
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({
      status: "success",
      code: 200,
      message: "successfully sign in",
      data: {
        token
      },
      meta: {},
    });
  } catch(err) {
    logger.error("failed to signin, internal server error");
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error occured",
      data: {},
      meta: {}
    });
  }
}

async function signout(req: Request, res: Response) {
  try {
    res.clearCookie(ACESSS_TOKEN_COOKIE_NAME);
    res.status(200).json({
      status: "success",
      code: 200,
      message: "successfully signed out",
      data: {},
      meta: {}
    });
  } catch(err) {
    logger.error("Error while logging out");
    res.status(500).json({
      status: "error",
      code: 500,
      message: "An internal server error occured",
      data: {},
      meta: {}
    });
  }
}

export default {
  signup,
  singin,
  signout
};
