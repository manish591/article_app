import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import logger from "../utils/logger";

const prisma = new PrismaClient();

async function createArticle(req: Request, res: Response) {
  try {
    const { title, subtitle, content } = req.body;
    const user_id = res.locals.user.id;

    const newArticle = await prisma.article.create({
      data: {
        title,
        subtitle,
        content,
        user_id,
        created_at: new Date(),
        updated_at: new Date(),
      }
    });
    
    res.status(202).json({
      status: "success",
      code: 202,
      message: "successfully created article",
      data: {
        ...newArticle
      },
      meta: {}
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

async function getArticles(req: Request, res: Response) {
  try {
    const { limit, page, username, sort } = req.query;
    const NUM_ITEMS = !limit || Number(limit) > 5 ? 5 : Number(limit);
    const OFFSET = page ? (Number(page) - 1) * NUM_ITEMS : 0;
    const USERNAME = String(username);
    const SORT = String(sort);

    const where: { user_id?: number } = {};
    const orderBy: { created_at?: typeof Prisma.SortOrder.desc } = {};

    if(username) {
      const user = await prisma.user.findFirst({
        where: {
          username: USERNAME
        }
      });

      if(user) {
        where.user_id = user.id;
      }
    }

    if(SORT) {
      if(SORT === "new") {
        orderBy.created_at = Prisma.SortOrder.desc;
      }
    }
    
    const articles = await prisma.article.findMany({
      skip: OFFSET,
      take: NUM_ITEMS,
      where: where,
      orderBy: orderBy
    });

    res.status(202).json({
      status: "success",
      code: 202,
      message: "successfully fetched article",
      data: articles,
      meta: {}
    });
  } catch(err) {
    logger.error("Internal server error occured", err);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error occured",
      data: {},
      meta: {},
    });
  }
}

async function getSingleArticle(req: Request, res: Response) {
  try {
    const { slug } = req.params;
    const articleId = Number(slug);
    
    if(articleId) {
      const articleData = await prisma.article.findFirst({
        where: {
          id: articleId
        }
      });

      if(articleData) {
        res.status(200).json({
          status: "success",
          code: 200,
          message: "article data found",
          data: articleData,
          meta: {}
        });
        return;
      }
    }

    res.status(404).json({
      status: "error",
      code: 404,
      message: "article not found",
      data: {},
      meta: {}
    });
  } catch(err) {
    logger.error("Internal server error occured", err);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error occured",
      data: {},
      meta: {},
    });
  }
}

async function deleteArticle(req: Request, res: Response) {
  try {
    const { slug } = req.params;
    const articleId = Number(slug);
    const userid = res.locals.user.id;

    if(!articleId) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "unable to delete article",
        data: {},
        meta: {}
      });

      return;
    }

    const isArticleFound = await prisma.article.findFirst({
      where: {
        id: articleId,
        user_id: userid
      }
    });

    if(!isArticleFound) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "Unable to delete article",
        data: {},
        meta: {}
      });

      return;
    }

    await prisma.article.delete({
      where: {
        id: articleId
      }
    });

    res.status(200).json({
      status: "success",
      code: 200,
      message: "successfully deleted article",
      data: {},
      meta: {}
    });
  } catch(err) {
    logger.error("Internal server error occured", err);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error occured",
      data: {},
      meta: {},
    });
  }
}

async function updateArticle(req: Request, res: Response) {
  try {
    const { slug } = req.params;
    const { title, subtitle, content } = req.body;
    const articleId = Number(slug);
    const userid = res.locals.user.id;

    if(!articleId) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "unable to update article",
        data: {},
        meta: {}
      });

      return;
    }

    const isArticleFound = await prisma.article.findFirst({
      where: {
        id: articleId,
        user_id: userid
      }
    });

    if(!isArticleFound) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "Unable to update the article",
        data: {},
        meta: {}
      });

      return;
    }

    const updatedArticle = await prisma.article.update({
      where: {
        id: articleId
      },
      data: {
        title,
        subtitle,
        content
      }
    });

    res.status(200).json({
      status: "success",
      code: 200,
      message: "successfully updated article",
      data: updatedArticle,
      meta: {}
    });
  } catch(err) {
    logger.error("Internal server error occured", err);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error occured",
      data: {},
      meta: {},
    });
  }
}

export default {
  createArticle,
  getArticles,
  updateArticle,
  deleteArticle,
  getSingleArticle
};
