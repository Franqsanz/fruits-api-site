import { ApolloProvider } from "@apollo/client";
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Footer, Home } from "./components/index";
import { client } from "./components/provider";
import { Global } from "./styles/index";

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
  );
}

const root = document.getElementById("root");
render(<App />, root);
