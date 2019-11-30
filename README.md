# tsgraphql-starter

Star Wars API ported to GraphQL with TypeScript, TypeGraphQL, and Apollo Server.

## Setup

The dev/test cycle uses nodemon to restart the server when it detects any file changes.

```
npm i
npm run watch
```

## DotEnv

You need to create a .env file at the root of the project with the following entries:

```
#.env
GRAPHQLPORT=8000
RESTPORT=9000
HOSTNAME="localhost"
```

This will run the GraphQL server at http://localhost:8000 and the REST API at http://localhost:9000

## More GraphQL Resources

- https://graphql.org
- https://aws.amazon.com/appsync
- https://www.apollographql.com/
- https://www.prisma.io/
- https://hasura.io/
- https://github.com/robzhu/tsgraphql-starter
