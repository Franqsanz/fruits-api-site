import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About, Docs, Footer, Header, Home } from "./components/index";
import { Global } from "./styles/index";

const root = document.getElementById("root");

render(
  <React.StrictMode>
    <Global />
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/docs" component={Docs} />
      <Route path="/acerca-de" component={About} />
    </Router>
    <Footer />
  </React.StrictMode>,
  root
);
