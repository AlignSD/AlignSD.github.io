import React from "react";
import {  useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import "../../src/style.css"


function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
      
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="/">Evan Alioto</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
                <Nav.Link href="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Nav.Link>
                <Nav.Link href="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Navbar  >
    );
}

export default NavTabs;


