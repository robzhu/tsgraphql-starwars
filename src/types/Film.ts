import { Field, ObjectType, Int } from "type-graphql";
import { people, planets, vehicles, starships, species } from "../records";
import { Person } from "./Person";
import { Planet } from "./Planet";
import { Vehicle } from "./Vehicle";
import { Starship } from "./Starship";
import { Species } from "./Species";

@ObjectType()
export class Film {
  @Field()
  url: string;

  @Field()
  title: string;

  @Field(type => Int)
  episode_id: number;

  @Field()
  opening_crawl: string;

  @Field()
  director: string;

  @Field()
  producer: string;

  @Field()
  release_date: string;

  characters: [string];
  @Field(type => [Person], {name: "characters"})
  resolveHomeworld() {
    if (!this.characters) return [];
    return people.filter(p => this.characters.includes(p.url));
  }

  planets: [string];
  @Field(type => [Planet], {name: "planets"})
  resolvePlanets() {
    if (!this.characters) return [];
    return planets.filter(p => this.planets.includes(p.url));
  }
  
  vehicles: [string];
  @Field(type => [Vehicle], {name: "vehicles"})
  resolveVehicles() {
    if (!this.vehicles) return [];
    return vehicles.filter(v => this.vehicles.includes(v.url));
  }

  starships: [string]
  @Field(type => [Starship], {name: "starships"})
  resolveStarships() {
    if (!this.starships) return [];
    return starships.filter(s => this.starships.includes(s.url));
  }
  
  species: [string];
  @Field(type => [Species], {name: "species"})
  resolveSpecies() {
    if (!this.species) return [];
    return species.filter(s => this.species.includes(s.url));
  }
}