import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./components/pages/HomePage";
import Portfolio from "./components/pages/PortfolioPage";
import Contact from "./components/pages/ContactPage";
import "../src/style.css";


function App() {
  return (
    <Router>
      <link rel="stylesheet" href="./style.css"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      <div>
        <NavTabs />
        <Home />
        <Portfolio />
        {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
