import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const link = from([
  new HttpLink({ uri: 'https://fruits-api.netlify.app/graphql'})
  // new HttpLink({ uri: "http://localhost:9000/graphql" }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
