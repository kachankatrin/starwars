import React from "react";
import { url, splitCategory, splitId } from "../utils";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function LinkProperty(props) {
  return (
    <Link
      to={`/${splitCategory(props.value)}/${splitId(props.value)}`}
      onClick={() => {
        props.getEntity(splitCategory(props.value), splitId(props.value));
      }}
    >
      {props.value}
    </Link>
  );
}

function LinksProperty(props) {
  return (
    <ul>
      {props.value.map((data) => (
        <li>
          <LinkProperty value={data} getEntity={props.getEntity} />
        </li>
      ))}
    </ul>
  );
}

class EntityInfo extends React.Component {
  state = {
    entity: null,
  };

  getEntity = async (category, id) => {
    const data = await fetch(`${url}${category}/${id}/`);
    const json = await data.json();
    this.setState({
      entity: json,
    });
  };

  async componentDidMount() {
    this.getEntity(
      this.props.match.params.entityCategory,
      this.props.match.params.id
    );
  }

  render() {
    const { entity } = this.state;
    const objDataToArray = entity && Object.entries(entity);
    const propsWithSingleLink = ["homeworld", "url"];
    const propsWithMultipleLinks = [
      "films",
      "species",
      "vehicles",
      "starships",
      "pilots",
      "people",
      "characters",
      "residents",
      "planets",
    ];

    return (
      <div>
        <Jumbotron className="charInfo">
          <Container>
            <h2 className="greet">
              Hello I am a &nbsp;{" "}
              {entity && (entity.name ? entity.name : entity.title)}
            </h2>
            {entity ? (
              <ul>
                {objDataToArray.map(([key, value]) => (
                  <li>
                    <h4>{key}:</h4>
                    {propsWithMultipleLinks.includes(key) ? (
                      <LinksProperty value={value} getEntity={this.getEntity} />
                    ) : propsWithSingleLink.includes(key) ? (
                      <LinkProperty value={value} getEntity={this.getEntity} />
                    ) : (
                      <p>{value}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              "No enteties"
            )}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mainState: state.mainState,
  };
};

export default connect(mapStateToProps)(EntityInfo);
