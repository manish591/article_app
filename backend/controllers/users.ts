import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger";
import { sanitizeData } from "../utils/sanitizeUser";

const prisma = new PrismaClient();

async function getSelfDetails(req: Request, res: Response) {
  try {
    const user = res.locals.user;
    const sanitizedUser = sanitizeData(user, ["email", "password"]);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "successfully returned the data",
      data: {
        ...sanitizedUser
      },
      meta: {}
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

async function getUserByUsername(req: Request, res: Response) {
  try {
    const username = req.params.username;

    if(!username) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "not found",
        data: {},
        meta: {}
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        username
      }
    });

    if(!user) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "not found",
        data: {},
        meta: {}
      });
    }

    const sanitizedUserData = sanitizeData(user, ["email", "password"]);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "successfully returns user",
      data: {
        ...sanitizedUserData
      },
      meta: {},
    });
  } catch(err) {
    logger.error("Internal server error occured", err);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error occured",
      data: {},
      meta: {}
    });
  }
}

async function updateSelfDetails() {

}

async function deleteSelfAccount() {

}

export default {
  getSelfDetails,
  getUserByUsername,
  updateSelfDetails,
  deleteSelfAccount
};
