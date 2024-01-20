import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { MediaResolver } from "../resolvers/media/media.resolver";

function configGraphQLServer(httpServer: http.Server) {
  const { typeDefs, resolvers } = buildTypeDefsAndResolversSync({
    resolvers: [MediaResolver],
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: false,
    formatError: (err) => {
      return { message: err.message };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], // apollo -> http bind.
  });
  return server;
}

export default configGraphQLServer;
