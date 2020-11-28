import { ApolloClient, gql, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const link = new HttpLink({
  uri: "http://localhost:9000/graphql",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function Test() {
  return (
    <ApolloProvider client={client}>
      <Query query={ALL_FRUITS}>
        {function ({ loading, error, data }) {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>error</p>;
          // return console.log(data);
          return data.fruits.map((fruit) => console.log(fruit));
        }}
      </Query>
    </ApolloProvider>
  );
}

const ALL_FRUITS = gql`
  query allFruits {
    Fruits {
      id
      scientific_name
      fruit_name
      origin
      description
      climatic_zone
    }
  }
`;

export default Test;
