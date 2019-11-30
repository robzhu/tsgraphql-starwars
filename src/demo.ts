import express from "express";
import fs from "fs";
import path from "path";
import { RESTStartingResource, GraphQLEndpoint } from "./endpoints";

const mainJS = fs
  .readFileSync(path.resolve(__dirname, "../webdemo/main.js"))
  .toString()
  .replace(
    "const LukeURI = REPLACEME;",
    `const LukeURI = "${RESTStartingResource}";`
  )
  .replace(
    "const GraphQLEndpoint = REPLACEME;",
    `const GraphQLEndpoint = "${GraphQLEndpoint}";`
  );

const indexHTML = fs
  .readFileSync(path.resolve(__dirname, "../webdemo/index.html"))
  .toString()
  .replace("REPLACE_RESTENDPOINT", RESTStartingResource)
  .replace("REPLACE_GRAPHQLENDPOINT", GraphQLEndpoint);

export function configureDemo(app: express.Express) {
  app.get("/", (_, res) => {
    res
      .set("Content-Type", "text/html; charset=utf-8")
      .status(200)
      .end(indexHTML);
  });

  app.get("/main.js", (_, res) => {
    res
      .set("Content-Type", "text/html; charset=utf-8")
      .status(200)
      .end(mainJS);
  });
  app.use(express.static("webdemo"));
}
