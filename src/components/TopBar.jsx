import { Container, Nav, Navbar } from "react-bootstrap";
import AllTheBooks from "./AllTheBooks";

const TopBar = function () {
  return (
    <Navbar expand="lg" bg="info">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" /*{ onClick={() => AllTheBooks.setState({selectedGenre})}}*/>Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
