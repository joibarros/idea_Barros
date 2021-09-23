import React from "react";
import {
  Button,
  Navbar,
  Dropdown,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../img/minipetit-logo-removebg-preview.png";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} width = "100px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">MiniCocina</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Filtrar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Baberos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Ajuares
                </NavDropdown.Item>
              </NavDropdown>
              <CartWidget cartNumber=' 4' color='blue' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
