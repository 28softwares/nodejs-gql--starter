import "reflect-metadata";
import express from "express";
import { EnvConfiguration } from "./config/env.config";
import { AppDataSource } from "./config/database.config";
import { configMiddleware } from "./middlewares";
import http from "http";
import configGraphQLServer from "./config/graphql.config";

class Server {
  constructor() {
    this.bootstrap();
  }

  // bootstrap
  async bootstrap() {
    AppDataSource.initialize()
      .then(async () => {
        console.log("Data Source has been initialized!");

        const app = express();
        const httpServer = http.createServer(app);
        const server = configGraphQLServer(httpServer);
        await server.start();

        configMiddleware(app, server);

        httpServer.listen(EnvConfiguration.PORT, () => {
          console.log("TCP server established");
        });
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  }
}

new Server();
