import { Container } from "react-bootstrap";

const Footer = function () {
  return (
    <footer className="bg-dark mt-2">
      <Container id="footerCont" className="d-flex justify-content-center align-items-center text-white">
        <p>Contatti</p>
        <p>Servizi</p>
        <p>Lavora con noi</p>
        <p>Policy sulla Privacy</p>
      </Container>
    </footer>
  );
};

export default Footer;
