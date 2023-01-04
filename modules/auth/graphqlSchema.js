const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    token: String
    _id: ID
  }

  type authRes {
    username: String
    email: String
    password: String
    _id: ID
  }

  input RegisterInput {
    username: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Query {
    users: [authRes]
  }

  type Mutation {
    registerUser(registerInput: RegisterInput!): User!
    loginUser(loginInput: LoginInput!): User!
    deleteUsers: String
  }
`;

module.exports = typeDefs;
