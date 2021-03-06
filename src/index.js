import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About, Docs, Footer, Header, Home } from "./components/index";
import { Global } from "./styles/index";

const link = from([
  new HttpLink({ uri: 'https://fruits-api.netlify.app/graphql'})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

function App() {
  return (
    <>
      <Global />
      <Router>
        <Header />
        <ApolloProvider client={client}>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/acerca-de" component={About} />
        </ApolloProvider>
      </Router>
      <Footer />
    </>
  )
}

const root = document.getElementById("root");

render(<App />, root);
