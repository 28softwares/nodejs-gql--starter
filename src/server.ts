import "reflect-metadata";
import express from "express";
import { EnvConfiguration } from "./config/env.config";
import { createHandler } from "graphql-http/lib/use/express";
import schema from "./schemas/dummy.schema";

const app = express();
app.all("/graphql", createHandler({ schema }));
app.listen(EnvConfiguration.PORT, () => {
  console.log("Node-gql server started");
});
