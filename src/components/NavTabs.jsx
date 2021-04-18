import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import {

//   Link
// } from "react-router-dom";

import "../../src/style.css"


function NavTabs() {
  // This allows the component to check the route any time the user uses a link to navigate.


  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Navbar.Brand className="mx-auto" href="/">Evan Alioto</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div>Evan Alioto</div><br />
        <Nav className="mx-auto">

          <Link className="nav-link" smooth to="#home">Home</Link>
          <Link className="nav-link" smooth to="#portfolio">portfolio</Link>
          {/* <Link className="nav-link" to="/contact">contact</Link>  Leave this for future development if I want to link a database to this. */}
        </Nav>
      </Navbar.Collapse>
    </Navbar >


  );
}

export default NavTabs;


