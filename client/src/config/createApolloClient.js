import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: true,
  }),
  uri: "https://shortlyg.herokuapp.com/graphql",
});

export default apolloClient;
