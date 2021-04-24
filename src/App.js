import React from "react";
import { HashRouter as Router } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./components/pages/HomePage";
import Portfolio from "./components/pages/PortfolioPage";
import Particles from 'react-particles-js';
// import Contact from "./components/pages/ContactPage";
import "../src/style.css";


function App() {
  return (
    <Router>
      <link rel="stylesheet" href="./style.css"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto&display=swap" rel="stylesheet"/>
      <div>
      <Particles className='particles-canvas'
      
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            links: {
              color: "rgb(6, 240, 209, 1)",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            shape: {
              type: 'square',
              stroke: {
                width: 6,
                color: 'rgb(255, 165, 0)'
              }
            }
          },
        }}
        style={{
          width: '100%',
          height: '50%',
        }}
        
      />
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
