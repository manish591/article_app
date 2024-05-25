import { Request, Response } from "express";

async function healthcheck(req: Request, res: Response) {
  res.json({
    uptime: new Date().getTime(),
  });
}

export default {
  healthcheck
};
