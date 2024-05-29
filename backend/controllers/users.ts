import { Request, Response } from "express";
import logger from "../utils/logger";
import { sanitizeData } from "../utils/sanitizeUser";

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

async function getUserByUsername() {

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
