require("dotenv").config();

import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildAppSchema } from "./schema";

process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit();
});

(async () => {
  const server = new ApolloServer({
    schema: await buildAppSchema()
  });

  const { url } = await server.listen(process.env.PORT || 80);
  console.log(`Server running on ${url}`);
})();
