import { ObjectType, Field } from "type-graphql";
import { Person } from "./Person";
import { people, films } from "../records";
import { Film } from "./Film";

@ObjectType()
export class Starship {
  @Field()
  url: string;

  @Field()
  name: string;

  @Field()
  model: string;

  @Field()
  manufacturer: string;

  @Field()
  cost_in_credits: string;

  @Field()
  length: string;

  @Field()
  max_atmosphering_speed: string;

  @Field()
  crew: string;

  @Field()
  cargo_capacity: string;

  @Field()
  consumables: string;

  @Field()
  hyperdrive_rating: string;

  @Field()
  MGLT: string;

  @Field()
  starship_class: string;

  pilots: [string];
  @Field(type => [Person], {name: "pilots"})
  resolvePilots() {
    if (!this.pilots) return [];
    return people.filter(p => this.pilots.includes(p.url));
  }

  films: [string];
  @Field(type => [Film], {name: "films"})
  resolveFilms() {
    if (!this.films) return [];
    return films.filter(f => this.films.includes(f.url));
  }
}