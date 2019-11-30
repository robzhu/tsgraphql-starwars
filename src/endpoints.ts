export const RESTPORT = process.env.RESTPORT || 8080;
export const HOSTNAME = process.env.HOSTNAME || `localhost`;
export const GRAPHQLPORT = process.env.GRAPHQLPORT || 80;

export function RESTEndpoint() {
  return `http://${HOSTNAME}:${RESTPORT}`;
}

export function GraphQLEndpoint() {
  return `http://${HOSTNAME}:${GRAPHQLPORT}`;
}

export function RESTStartingResource() {
  return `${RESTEndpoint()}/api/people/1`;
}
