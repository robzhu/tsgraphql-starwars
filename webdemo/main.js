async function runREST() {
  // This value will be rewritten by demo.ts
  const LukeURI = REPLACEME;
  const character = await fetchObject(LukeURI);
  const films = await fetchAll(character.films);
  const allCharacterURIs = flatten(films.map(film => film.characters));
  const uniqueCharacterURIs = unique(allCharacterURIs);
  const uniqueCharacters = await fetchAll(uniqueCharacterURIs);
  const allCharNames = uniqueCharacters
    .map(c => c.name)
    .sort()
    .join(", ");
  document.getElementById("names").innerText = allCharNames;
}

async function runGraphQL() {
  // This value will be rewritten by demo.ts
  const GraphQLEndpoint = REPLACEME;
  const { data } = await fetchGraphQL(
    GraphQLEndpoint,
    `{
      person(name: "Luke Skywalker") {
        name
        films {
          characters {
            name
          }
        }
      }
    }`
  );

  const films = data.person.films;
  const allCharacters = flatten(films.map(film => film.characters));
  const allCharacterNames = allCharacters.map(c => c.name);
  const names = unique(allCharacterNames)
    .sort()
    .join(", ");
  document.getElementById("names").innerText = names;
}
