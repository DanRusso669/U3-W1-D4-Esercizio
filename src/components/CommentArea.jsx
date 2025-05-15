import { Component } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
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

  componentDidMount() {
    console.log("componentDidMount()");

    this.fetchedComments(this.props.id);
  }

  render() {
    return (
      <>
        <h4 className="mt-2">Commenti</h4>
        <CommentList comments={this.state.arrOfComments} id={this.props.id} />
        <h5 className="mt-2 text-center">Aggiungi un commento</h5>
        <AddComment id={this.props.id} />
      </>
    );
  }
}

export default CommentArea;
