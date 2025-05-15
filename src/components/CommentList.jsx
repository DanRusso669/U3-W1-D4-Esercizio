import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup variant="flush" className="mt-1 rounded">
          {this.props.comments.map(comment => (
            <ListGroup.Item variant="primary">
              <SingleComment recensione={comment} id={this.props.id} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default CommentList;
