import { Container } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <TopBar />
      <Container fluid className="px-4">
        <Hero />
      </Container>
    </>
  );
}

export default App;
