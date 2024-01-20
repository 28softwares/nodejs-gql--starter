import { Request, Response, NextFunction } from "express";
import { QueryFailedError } from "typeorm";
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // typeorm
  if (err instanceof QueryFailedError) {
    return res.status(500).send({
      status: "error",
      message: "Query Error in DB",
    });
  }

  // for all remaining errors.
  return res.status(500).send({
    status: "error",
    message: err.message,
  });
};

export default errorHandler;
