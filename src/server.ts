require("dotenv").config();

import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildAppSchema } from "./schema";
import { createRESTServer } from "./REST";
import { PORT, RESTEndpoint, GraphQLEndpoint, GRAPHQLPATH } from "./endpoints";

process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit();
});

(async () => {
  const server = new ApolloServer({
    schema: await buildAppSchema()
  });

  const app = createRESTServer();
  server.applyMiddleware({
    app,
    path: GRAPHQLPATH
  });

  app.listen(PORT, () => {
    console.log(`Web demo started at ${RESTEndpoint}`);
    console.log(`REST API started, open ${RESTEndpoint}/api/people/1`);
    console.log(`GraphQL server running on ${GraphQLEndpoint}`);
  });
})();
