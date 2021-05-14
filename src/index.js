import { ApolloProvider } from "@apollo/client";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { client } from "./components/client";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer, Home } from "./components/index";
import { Global } from "./styles/index";

function App() {
  return (
    <>
      <StrictMode>
        <Global />
        <ApolloProvider client={client}>
          <Home />
        </ApolloProvider>
        {/* <Router>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Found} />
        </Router> */}
        <Footer />
      </StrictMode>
    </>
  );
}

const root = document.getElementById("root");
render(<App />, root);
