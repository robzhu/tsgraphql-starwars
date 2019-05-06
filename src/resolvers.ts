import { Resolver, Query, Arg } from "type-graphql";
import { people, planets, films, vehicles, starships, species } from './records';
import { Person } from "./types/Person";
import { Planet } from "./types/Planet";
import { Film } from "./types/Film";
import { Vehicle } from "./types/Vehicle";
import { Starship } from "./types/Starship";
import { Species } from "./types/Species";

@Resolver()
export class PersonResolver {
  @Query(returns => [Person])
  public people() {
    return people;
  }

  @Query(returns => Person, {nullable: true})
  public person(
    @Arg("name")
    name: string
  ) {
    return people.find(p => p.name === name);
  }
}

@Resolver() 
export class PlanetResolver {
  @Query(returns => [Planet])
  public planets() {
    return planets;
  }
}

@Resolver() 
export class FilmResolver {
  @Query(returns => [Film])
  public films() {
    return films;
  }
}

@Resolver() 
export class VehiclesResolver {
  @Query(returns => [Vehicle])
  public vehicles() {
    return vehicles;
  }
}

@Resolver() 
export class StarshipsResolver {
  @Query(returns => [Starship])
  public starships() {
    return starships;
  }
}

@Resolver() 
export class SpeciesResolver {
  @Query(returns => [Species])
  public species() {
    return species;
  }
}