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

async function updateSelfDetails(req: Request, res: Response) {
  try {
    const userDataToUpdate = req.body;

    if(Object.entries(userDataToUpdate).length <= 0) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "please provide data to update",
        data: {},
        meta: {}
      });
    }

    const updatedData = await prisma.user.update({
      data: {
        ...userDataToUpdate
      },
      where: {
        id: res.locals.user.id
      }
    });

    const sanitizeUserData = sanitizeData(updatedData, ["email", "password"]);

    res.status(202).json({
      status: "success",
      code: 202,
      message: "update user data successfully",
      data: {
        ...sanitizeUserData
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

export default {
  getSelfDetails,
  getUserByUsername,
  updateSelfDetails
};
