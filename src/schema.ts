import { buildSchema } from "type-graphql";
import { PersonResolver, PlanetResolver, FilmResolver, VehiclesResolver, StarshipsResolver, SpeciesResolver } from "./resolvers";

export async function buildAppSchema() {
  return await buildSchema({
    // Add more resolvers here
    resolvers: [
      PersonResolver,
      PlanetResolver,
      FilmResolver,
      VehiclesResolver,
      StarshipsResolver,
      SpeciesResolver,
    ]
  });
}
