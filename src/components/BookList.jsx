import { Component } from "react";

import SingleBook from "./SingleBook";
import { Button, Container, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchedParam: "",
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = value => {
    this.setState({ searchedParam: value });
  };

  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="Cerca un libro" onChange={e => this.handleChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Container>
        <Container fluid>
          {this.state.searchedParam === "" ? (
            <Row xs={1} md={3} lg={6} className="gy-2">
              {this.props.lista.map(book => (
                <SingleBook libro={book} />
              ))}
            </Row>
          ) : (
            <Row xs={1} md={3} lg={6} className="gy-2">
              {this.props.lista
                .filter(libro => libro.title.toLowerCase().includes(this.state.searchedParam.toLowerCase()))
                .map(book => (
                  <SingleBook libro={book} />
                ))}
            </Row>
          )}
        </Container>
      </>
    );
  }
}

export default BookList;
