import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Footer, Home } from "./components/index";
import { Global } from "./styles/index";

const link = from([
  new HttpLink({ uri: 'https://fruits-api.netlify.app/graphql'})
  // new HttpLink({ uri: 'http://localhost:9000/graphql'})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

function App() {
  return (
    <>
      <Global />
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
      {/* <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/acerca-de" component={About} />
      </Router> */}
      <Footer />
    </>
  )
}

const root = document.getElementById("root");

render(<App />, root);
