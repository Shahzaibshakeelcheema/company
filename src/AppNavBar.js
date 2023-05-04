import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useState } from "react";

function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar color="primary" dark expand="lg" background="primary">
      <div className="container-fluid">
        <NavbarBrand href="/">INSEL Solutions</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto " navbar>
            <NavItem>
              <NavLink href="/" active>
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>MERN Devs</DropdownItem>
                <DropdownItem>Andriod Devs</DropdownItem>
                <DropdownItem>IOs Devs</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>PASHA & PSEB</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </div>
      <div>
        <Form className="d-flex">
          <FormGroup>
            <Label for="search">Search</Label>
            <Input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </FormGroup>
          <Button color="secondary" className="my-2 my-sm-0" type="submit">
            Search
          </Button>
        </Form>
      </div>
    </Navbar>
  );
}

export default AppNavBar;
