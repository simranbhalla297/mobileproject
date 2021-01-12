import React from "react";
import { Navbar, Nav, NavItem, Button, NavDropdown } from "react-bootstrap";
function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img src={"logo.svg"} className="headerImg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Carrer</Nav.Link>
            <Nav.Link>Events</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>Support</Nav.Link>
          </Nav>
          <Nav>
            <Button
              style={{
                backgroundColor: "white",
                color: "hsl(257deg 7% 63%)",
                border: "none",
              }}
            >
              Log In
            </Button>{" "}
            <Button variant="secondary" className="btn">
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
