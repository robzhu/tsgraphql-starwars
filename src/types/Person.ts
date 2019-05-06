import { Field, registerEnumType, ObjectType } from "type-graphql";
import { planets, films, species, vehicles, starships } from "../records";
import { Planet } from "./Planet";
import { Film } from "./Film";
import { Species } from "./Species";
import { Vehicle } from "./Vehicle";
import { Starship } from "./Starship";

export enum Gender {
  male = "male",
  female = "female",
  na = "n/a",
}

registerEnumType(Gender, {name: "Gender"});

@ObjectType()
export class Person {
  @Field()
  url: string;

  @Field()
  name: string;

  @Field()
  height: string;

  @Field()
  mass: string;

  @Field()
  hair_color: string;

  @Field()
  skin_color: string;

  @Field()
  eye_color: string;

  @Field()
  birth_year: string;

  @Field()
  gender: Gender;

  homeworld: string;
  @Field(type => Planet, {name: "homeworld", nullable: true})
  resolveHomeworld() {
    if (!this.homeworld) return null;
    return planets.find(p => p.url === this.homeworld);
  }

  films: [string];
  @Field(type => [Film], {name: "films"})
  resolveFilms() {
    if (!this.films) return [];
    return films.filter(film => this.films.includes(film.url));
  }

  species: [string];
  @Field(type => [Species], {name: "species"})
  resolveSpecies() {
    if (!this.species) return [];
    return species.filter(s => this.species.includes(s.url));
  }
  
  vehicles: [string];
  @Field(type => [Vehicle], {name: "vehicles"})
  resolveVehicles() {
    if (!this.vehicles) return [];
    return vehicles.filter(v => this.vehicles.includes(v.url));
  }

  starships: [string];
  @Field(type => [Starship], {name: "starships"})
  resolveStarships() {
    if (!this.starships) return [];
    return starships.filter(s => this.starships.includes(s.url));
  }
}