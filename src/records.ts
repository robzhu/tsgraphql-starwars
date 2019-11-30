import { Person } from "./types/Person";
import { Planet } from "./types/Planet";
import { Film } from "./types/Film";
import { Vehicle } from "./types/Vehicle";
import { Starship } from "./types/Starship";
import { Species } from "./types/Species";
import { RESTEndpoint } from "./endpoints";

const originalPrefix = "https://swapi.co";
const newHostname = RESTEndpoint;

// The original data set was scraped from swapi.co. We fix the URLs
// here so that the links are not broken.
function fixUrls(path: string) {
  const records = require(path) as Array<any>;

  for (let record of records) {
    for (let propName of Object.getOwnPropertyNames(record)) {
      let value = record[propName];
      if (typeof value === "string") {
        record[propName] = value.replace(originalPrefix, newHostname);
      }

      if (value instanceof Array) {
        record[propName] = value.map(item =>
          typeof item === "string"
            ? item.replace(originalPrefix, newHostname)
            : item
        );
      }
    }
  }
  return records;
}

export const people = fixUrls("../data/people.json") as Array<Person>;
export const planets = fixUrls("../data/planets.json") as Array<Planet>;
export const films = fixUrls("../data/films.json") as Array<Film>;
export const vehicles = fixUrls("../data/vehicles.json") as Array<Vehicle>;
export const starships = fixUrls("../data/starships.json") as Array<Starship>;
export const species = fixUrls("../data/species.json") as Array<Species>;
