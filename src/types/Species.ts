import { ObjectType, Field } from "type-graphql";
import { Planet } from "./Planet";
import { planets, people, films } from "../records";
import { Person } from "./Person";
import { Film } from "./Film";

@ObjectType()
export class Species {
  @Field()
  url: string;

  @Field()
  name: string;

  @Field()
  classification: string;

  @Field()
  designation: string;

  @Field()
  average_height: string;

  @Field()
  skin_colors: string;

  @Field()
  hair_colors: string;

  @Field()
  eye_colors: string;

  @Field()
  average_lifespan: string;

  @Field()
  language: string;

  homeworld: string;
  @Field(type => Planet, {nullable: true})
  resolveHomeworld() {
    if (!this.homeworld) return null;
    return planets.find(p => p.url === this.homeworld);
  }

  people: [string];
  @Field(type => [Person])
  resolvePeople() {
    if (!this.people) return [];
    return people.filter(p => this.people.includes(p.url));
  }

  films: [string];
  @Field(type => [Film])
  resolveFilm() {
    if (!this.films) return [];
    return films.filter(f => this.films.includes(f.url));
  }
}