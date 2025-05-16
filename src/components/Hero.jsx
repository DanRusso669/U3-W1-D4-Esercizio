import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

class Hero extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle variant="secondary" id="dropdownBasic" className="rounded-0">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Grid className="icons" />
          <Grid3x3 className="icons" />
        </div>
      </div>
    );
  }
}

export default Hero;
