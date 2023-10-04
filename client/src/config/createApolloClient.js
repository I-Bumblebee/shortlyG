import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: true,
  }),
  uri: "http://localhost:4000/graphql",
});

export default apolloClient;
