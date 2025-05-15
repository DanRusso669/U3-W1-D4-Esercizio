import { Component } from "react";
import { Alert, Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
// import TopBar from "./TopBar";
import fantasy from "../array/fantasy.json";
import horror from "../array/horror.json";
import romance from "../array/romance.json";
import scifi from "../array/scifi.json";
import history from "../array/history.json";

class AllTheBooks extends Component {
  state = {
    selectedGenre: null,
  };

  render() {
    return (
      <>
        <Container fluid>
          {this.state.selectedGenre ? (
            <>
              <h1 className="text-center my-3">Ultimi Arrivi</h1>
              <Row xs={1} md={3} lg={6} className="gy-2">
                {this.state.selectedGenre.map(book => (
                  <Col key={book.asin}>
                    <Card id="cardCont">
                      <Card.Img id="cardImage" variant="top" className="cardImage" src={book.img} />
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <Badge bg="secondary">{book.price} $ </Badge>
                          <Button id="addBtn" variant="success">
                            Add To Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <>
              <Alert variant="secondary" className="text-center">
                Scegli un genere per visualizzare i libri correlati.
              </Alert>
              <div className="d-flex justify-content-center">
                <Button className="genreBtn" variant="success" onClick={() => this.setState({ selectedGenre: fantasy })}>
                  Fantasy
                </Button>
                <Button className="genreBtn" variant="danger" onClick={() => this.setState({ selectedGenre: romance })}>
                  Romance
                </Button>
                <Button className="genreBtn" variant="info" onClick={() => this.setState({ selectedGenre: scifi })}>
                  Scifi
                </Button>
                <Button className="genreBtn" variant="dark" onClick={() => this.setState({ selectedGenre: horror })}>
                  Horror
                </Button>
                <Button className="genreBtn" variant="warning" onClick={() => this.setState({ selectedGenre: history })}>
                  History
                </Button>
              </div>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
