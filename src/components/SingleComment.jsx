import { Component } from "react";
import { Button } from "react-bootstrap";

class SingleComment extends Component {
  deleteComment = id => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
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
          throw new Error("Errore nella fetch");
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between">
          <span>{this.props.recensione.comment}</span>
          <span>{this.props.recensione.rate}⭐</span>
        </div>
        <div className="d-flex flex-column align-items-start">
          <span id="authorEmail" className="fst-italic">
            {this.props.recensione.author}
          </span>
          <Button id="trashBtn" onClick={() => this.deleteComment(this.props.recensione._id)}>
            🗑
          </Button>
        </div>
      </>
    );
  }
}

export default SingleComment;
