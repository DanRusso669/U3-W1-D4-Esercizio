import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Bell, Search, PersonCircle } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

const TopBar = function () {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Nav.Link href="#" className="me-3">
          <Image src={logo} alt="logo" id="logo" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="toggleQui" className="bg-light" />
        <Navbar.Collapse id="toggleQui">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="fw-bold sections">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold sections">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold sections">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold sections">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold sections">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="d-flex  align-items-center">
            <Nav.Link href="#link" className="fw-bold icons">
              <Search />
            </Nav.Link>
            <Nav.Link href="#link" id="kids" className="fw-bold">
              KIDS
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold icons">
              <Bell />
            </Nav.Link>
            <Nav.Link href="#link" className="fw-bold icons">
              <PersonCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
