require("dotenv").config();

import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildAppSchema } from "./schema";
import { createRESTServer } from "./rest";

process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit();
});

(async () => {
  const server = new ApolloServer({
    schema: await buildAppSchema()
  });

  const { url } = await server.listen(process.env.PORT || 80);
  console.log(`GraphQL server running on ${url}`);

  // Note: 8080 is hardcoded in records.ts. If you change the port number here,
  // also updated records.ts.
  createRESTServer().listen(8080, () =>
    console.log(`REST API started, open http://localhost:8080/api/people/1`)
  );
})();
