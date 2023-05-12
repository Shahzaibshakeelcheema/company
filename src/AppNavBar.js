import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Navbar,NavbarBrand } from "react-bootstrap";
//import './Style.css'

function AppNavBar() {
  return (
    <div className="navbar navbar-expand navbar-dark bg-warning justify-content-center">
      <Navbar bg="warning">
        <div className="container-fluid c1 ">
          <Nav className="mr-auto bar ">
          <NavItem className="items">
            <Link to="/login" > Log In </Link>
</NavItem>
            <NavItem className="items">
                            <Link to="/home" active="true"> Home </Link>
            </NavItem>
            <NavItem className="items">
                            <Link to="/services">Services</Link>
            </NavItem>

            <NavbarBrand className="navbar-brand">
                         <Link to="/insel" className="items">    INSEL </Link>
                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            </NavbarBrand>

            <NavItem className="items">
                            <Link to="/contact">Contact</Link>
            </NavItem>

            <NavItem className="items">
                             <Link to="/about">About Us</Link>
            </NavItem>
            <NavItem className="items">
            <Link to="/register" > Sign Up </Link>
</NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default AppNavBar;
