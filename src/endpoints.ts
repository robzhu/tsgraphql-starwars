if (!process.env.HOSTNAME) {
  console.warn(
    "Warning: HOSTNAME environment variable not set, defaulting to localhost. Add 'HOSTNAME=demo.com' to .env file to overwrite."
  );
}

if (!process.env.PORT) {
  console.warn(
    "Warning: PORT environment variable not set, defaulting to 80. Add 'PORT=8080' to .env file to overwrite."
  );
}

export const PORT = process.env.PORT || 80;
export const HOSTNAME = process.env.HOSTNAME || `localhost`;
export const GRAPHQLPATH = "/graphql";

export const RESTEndpoint =
  PORT && PORT != 80 ? `http://${HOSTNAME}:${PORT}` : `http://${HOSTNAME}`;
export const GraphQLEndpoint = `${RESTEndpoint}${GRAPHQLPATH}`;
export const RESTStartingResource = `${RESTEndpoint}/api/people/1`;
