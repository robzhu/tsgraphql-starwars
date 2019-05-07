async function benchmark(name, action) {
  const before = performance.now();
  await action();
  const after = performance.now();
  document.getElementById("benchmark").innerText = `${name} took ${Math.round(
    after - before
  )}ms`;
}

async function runREST() {
  const LukeURI = "https://swapi.co/api/people/1/";
  const character = await fetchObject(LukeURI);
  const films = await fetchAll(character.films);
  const allCharacterURIs = films.map(film => film.characters).flat();
  const uniqueCharacterURIs = unique(allCharacterURIs);
  const uniqueCharacters = await fetchAll(uniqueCharacterURIs);
  const allCharNames = uniqueCharacters
    .map(c => c.name)
    .sort()
    .join(", ");
  document.getElementById("names").innerText = allCharNames;
}

async function runGraphQL() {
  const GraphQLEndpoint = "https://rzswapi.ngrok.io/";
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
  const allCharacters = films.map(film => film.characters).flat();
  const allCharacterNames = allCharacters.map(c => c.name);
  const names = unique(allCharacterNames)
    .sort()
    .join(", ");
  document.getElementById("names").innerText = names;
}
