const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
// without this requirement mongoose wouldn't start
const mongoose = require("./config/database");

const userTypeDef = require("./modules/auth/graphqlSchema");
const userResolvers = require("./modules/auth/resolvers");

const urlTypeDef = require("./modules/url/graphqlSchema");
const urlREsolvers = require("./modules/url/resolvers");

const typeDefs = mergeTypeDefs([userTypeDef, urlTypeDef]);
const resolvers = mergeResolvers([userResolvers, urlREsolvers]);

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

(async () => {
  await server.start();
  server.applyMiddleware({ app });
  // app.use(express.static(path.join(__dirname, "/client/build/")));

  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "./client/build/index.html"),
      function (err) {
        res.status(500).send(err);
      }
    );
  }); 

  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  // });

  const port_number = process.env.PORT || 4000;

  app.listen({ port: port_number }, () =>
    console.log(
      `Server running on https://somewhere.com/${server.graphqlPath}`
    )
  );
})();
