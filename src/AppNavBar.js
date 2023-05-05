import React from "react";
import { NavLink } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"

function AppNavBar() {

    return (
        <Navbar color="primary" dark expand="lg" background="primary">
            <div className="container-fluid">
                <Navbar.Brand href="/">INSEL Solutions</Navbar.Brand>
                <Nav className="mr-auto " navbar>
                    <Nav.Link>
                        <NavLink to="/" active>
                            Home <span className="visually-hidden">(current)</span>
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/Services">Services</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/about">About Us</NavLink>
                    </Nav.Link>

                </Nav>
            </div>

        </Navbar>
    );
}

export default AppNavBar;
