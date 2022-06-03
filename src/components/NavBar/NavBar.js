import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import CartWidget from '../CartWidget/CartWidget';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Container>
        <Navbar.Brand href="/">
            <img src={logo} className="d-inline-block align-top" alt="React Bootstrap logo"/>
        </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Food">Food</Nav.Link>
            <Nav.Link href="Drinks">Drinks</Nav.Link>
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="Help">Help</Nav.Link>
            <Nav.Link eventKey={2} href="AboutUs">
              About
            </Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation