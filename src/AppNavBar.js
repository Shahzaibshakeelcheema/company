import React from "react";
import { NavLink } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import './Style.css'


function AppNavBar() {

    return (
        <Navbar  dark expand="lg"  bg="warning">
            <div className="container-fluid c1" flex>
                <Nav className="mr-auto bar" navbar>
                    <Nav.Link className="items">
                        <NavLink to="/" active>
                            Home <span className="visually-hidden">(current)</span>
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link className="items">
                        <NavLink to="/Services">Services</NavLink>
                    </Nav.Link>


                    <Navbar.Brand href="/" className="items" >INSEL Solutions</Navbar.Brand>



                    <Nav.Link className="items">
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav.Link>
                    <Nav.Link className="items">
                        <NavLink to="/about">About Us</NavLink>
                    </Nav.Link>

                </Nav>
            </div>

        </Navbar>
    );
}

export default AppNavBar;
