# tsgraphql-starter

Star Wars API ported to GraphQL with TypeScript, TypeGraphQL, and Apollo Server.

## Setup

The dev/test cycle uses nodemon to restart the server when it detects any file changes.

```
npm i
npm run watch
```

## DotEnv

By default, the server will run on localhost:80. To modify, you need to create a .env file at the root of the project with the following entries:

```
#.env
PORT=8080
HOSTNAME="demo.com"
```

This will run the demo at http://localhost:8080

## More GraphQL Resources

- https://graphql.org
- https://aws.amazon.com/appsync
- https://www.apollographql.com/
- https://www.prisma.io/
- https://hasura.io/
- https://github.com/robzhu/tsgraphql-starter
