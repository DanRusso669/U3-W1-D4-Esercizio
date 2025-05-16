import { Component } from "react";
import { Alert, Container } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <div id="alertCont">
        <div>
          <Alert variant="primary" className="text-center">
            Benvenuto nel mio Shop - <strong>Feltronello</strong>
          </Alert>
        </div>
        <Container fluid>{this.props.children}</Container>
      </div>
    );
  }
}

export default Welcome;
