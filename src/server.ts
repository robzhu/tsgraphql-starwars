require("dotenv").config();

import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildAppSchema } from "./schema";
import { createRESTServer } from "./rest";
import { RESTEndpoint, RESTPORT, GRAPHQLPORT } from "./endpoints";

process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit();
});

(async () => {
  const server = new ApolloServer({
    schema: await buildAppSchema()
  });

  const { url } = await server.listen(GRAPHQLPORT);
  console.log(`GraphQL server running on ${url}`);

  createRESTServer().listen(RESTPORT, () => {
    const fullHost = RESTEndpoint();
    console.log(`REST API started, open ${fullHost}/api/people/1`);
    console.log(`Web demo started at ${fullHost}`);
  });
})();
