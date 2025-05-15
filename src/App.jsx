import { Button } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import fantasy from "./array/fantasy.json";
import horror from "./array/horror.json";
import romance from "./array/romance.json";
import scifi from "./array/scifi.json";
import history from "./array/history.json";

function App() {
  return (
    <>
      <TopBar />
      <Welcome>
        <BookList lista={fantasy} />
        {/* <BookList lista={horror} /> */}
      </Welcome>
      <Footer />
    </>
  );
}

export default App;
