import React from "react";
import { url } from "../utils";
import {  Jumbotron, Container } from "react-bootstrap";

class EntetyInfo extends React.Component {
  state = {
    entety: null,
  };
  async componentDidMount() {
    console.log("mount finish");
    const data = await fetch(
      `${url}${this.props.match.params.entetyCategory}/${this.props.match.params.id}/`
    );
    const json = await data.json();
    console.log(json);
    this.setState({
      entety: json,
    });
  }
  render() {
    console.log(this.props, "props");
    const { entety } = this.state;
    console.log("rendering", entety);
    console.log(typeof entety);
    return (
      <div>
        <Jumbotron className="charInfo">
          <Container>
            <h2 className="greet">
              Hello I am a &nbsp;
              {entety && (entety.name ? entety.name : entety.title)}
            </h2>
            {entety ? (
              <h1>{entety.name ? entety.name : entety.title}</h1>
            ) : (
              "No enteties"
            )}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default EntetyInfo;
