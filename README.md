# tsgraphql-starter

Star Wars API ported to GraphQL with TypeScript, TypeGraphQL, and Apollo Server.

## Setup

The dev/test cycle uses nodemon to restart the server when it detects any file changes.

```
npm i
npm run watch
```

## DotEnv

To use a custom port, place a .env file at the root of the project:

```
#.env
PORT=5000
```

This will cause the GraphQL server to start at http://localhost:5000
