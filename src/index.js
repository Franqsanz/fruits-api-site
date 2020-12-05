import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About, Docs, Footer, Header, Home } from "./components/index";
import { Global } from "./styles/index";

function App() {
  return (
    <>
      {/* <React.StrictMode> */}
      <Global />
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/acerca-de" component={About} />
      </Router>
      <Footer />
      {/* </React.StrictMode> */}
    </>
  )
}

const root = document.getElementById("root");

render (<App />, root);
