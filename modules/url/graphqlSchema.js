const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Url {
    longUrl: String
    shortUrl: String
    id: String
  }

  type Query {
		shortSpecificUrl(shortUrl: String!): Url
    everyUrl: [Url]
  }

  type Mutation {
    addUrl(longUrl: String!, id: String!, shortUrl: String!): String
    myUrls(id: String!): [Url]
		delete: String
  }
`;

module.exports = typeDefs;
