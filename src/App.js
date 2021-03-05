import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./components/pages/HomePage";
import Portfolio from "./components/pages/PortfolioPage";
import Contact from "./components/pages/ContactPage";
import "../src/style.css"

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="assets/css/style.css"></link>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
