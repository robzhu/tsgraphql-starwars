import { Person } from "./types/Person";
import { Planet } from "./types/Planet";
import { Film } from "./types/Film";
import { Vehicle } from "./types/Vehicle";
import { Starship } from "./types/Starship";
import { Species } from "./types/Species";

export const people = require('../data/people.json') as Array<Person>;
export const planets = require('../data/planets.json') as Array<Planet>;
export const films = require('../data/films.json') as Array<Film>;
export const vehicles = require('../data/vehicles.json') as Array<Vehicle>;
export const starships = require('../data/starships.json') as Array<Starship>;
export const species = require('../data/species.json') as Array<Species>;
