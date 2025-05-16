import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    arrOfComments: [],
    newComment: {
      comment: "",
      rate: "",
      elementId: this.props.id,
    },
  };

  fetchedComments = id => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZGE1NDFlYmU4MjAwMTUwOWYyZmQiLCJpYXQiOjE3NDczMTExODgsImV4cCI6MTc0ODUyMDc4OH0.kEtoYophv7L_kiVwy8k0G6o7hFMJYbiyXKOgl0Glz28",
      },
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Richiesta alla fetch fallita");
        }
      })
      .then(arrOfComments => {
        console.log(arrOfComments);
        this.setState({ arrOfComments });
      })
      .catch(err => {
        console.log(err);
      });
  };

  submitNewComment = e => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZGE1NDFlYmU4MjAwMTUwOWYyZmQiLCJpYXQiOjE3NDczMTExODgsImV4cCI6MTc0ODUyMDc4OH0.kEtoYophv7L_kiVwy8k0G6o7hFMJYbiyXKOgl0Glz28",
      },
    })
      .then(resp => {
        if (resp.ok) {
          this.handleReset();
          return resp.json();
        } else {
          throw new Error("Invio all'API fallito.");
        }
      })
      .then(this.fetchedComments(this.props.id))
      .catch(err => console.log(err));
  };

  handleChange = (propName, propValue) => {
    this.setState({ newComment: { ...this.state.newComment, [propName]: propValue } });
  };

  handleReset = () => {
    this.setState({
      newComment: {
        comment: "",
        rate: "",
        elementId: this.props.id,
      },
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submitNewComment}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Recensione</Form.Label>
            <Form.Control as="textarea" placeholder="Scrivi quello che pensi del libro" required onChange={e => this.handleChange("comment", e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control type="number" placeholder="Voto da 1 a 5 ⭐" required onChange={e => this.handleChange("rate", e.target.value)} />
          </Form.Group>

          <Button variant="info" type="submit">
            Invia
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
