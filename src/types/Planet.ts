import { Field, ObjectType } from "type-graphql";
import { people } from "../records";
import { Person } from "./Person";

@ObjectType()
export class Planet {
  @Field()
  url: string;

  @Field()
  name: string;

  @Field()
  rotation_period: string;

  @Field()
  orbital_period: string;

  @Field()
  diameter: string;

  @Field()
  climate: string;

  @Field()
  gravity: string;

  @Field()
  terrain: string;

  @Field()
  surface_water: string;

  @Field()
  population: string;

  residents: [string];
  @Field(type => [Person], {name: "residents"})
  resolveHomeworld() {
    if (!this.residents) return [];
    return people.filter(p => this.residents.includes(p.url));
  }

  //films
  //species
  //vehicles
  //starships
}