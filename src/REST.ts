import express from "express";
import {
  films,
  people,
  vehicles,
  starships,
  planets,
  species
} from "./records";
import { configureDemo } from "./demo";

function sendMaybeFound(response: express.Response, resource: any) {
  if (resource) {
    response.status(200);
    response.send(resource);
  } else {
    response.status(404);
    response.send("not found");
  }
}

export function createRESTServer() {
  const app = express();

  function configureRoute(resourceName: string, records: Array<any>) {
    app.get(`/api/${resourceName}/:id`, (req, res) => {
      const { id } = req.params;
      if (id == null) {
        sendMaybeFound(res, null);
      }

      const match = records.find(f => f.url.includes(`/${resourceName}/${id}`));
      sendMaybeFound(res, match);
    });
  }

  configureRoute("films", films);
  configureRoute("people", people);
  configureRoute("vehicles", vehicles);
  configureRoute("starships", starships);
  configureRoute("planets", planets);
  configureRoute("species", species);

  configureDemo(app);
  return app;
}
