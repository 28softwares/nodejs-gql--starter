import express from "express";
import errorHandler from "../middlewares/errorhandler.middleware";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
// @ts-ignore
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";

export const configMiddleware = (
  app: express.Application,
  server: ApolloServer
) => {
  app.use(
    express.json(),
    cors({ origin: "*" }),
    graphqlUploadExpress(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ req, res }),
    })
  );

  app.use(errorHandler);
};
