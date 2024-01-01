import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

/*const categories = products.map(item => item.category);
const uniqueCategories = new Set(categories);*/

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>PadelShop</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={`/category/paletas-gama-alta`}>
            Paletas gama alta
          </Nav.Link>
          <Nav.Link as={NavLink} to={`/category/paletas-gama-media`}>
            Paletas gama media
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
