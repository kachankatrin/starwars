import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Starships extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDataAxios("starshipsData", "starships/", "name"));
  }

  renderStarship = ({ name, consumables, model }) => {
    return (
      <ul>
        <li>Name: {name}</li>
        <li>Consumables: {consumables}</li>
        <li>Model: {model}</li>
      </ul>
    );
  };

  renderTitle = ({ name }) => name;

  render() {
    return (
      <div>
        <h1>Starships</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios(
                "starshipsData",
                `starships/?search=${e.target.value}`,
                "name"
              )
            );
          }}
        />
        <GridComponent
          loading={this.props.loading}
          currentData={this.props.starshipsData}
          history={this.props.history}
          entityCategory="starships"
          renderTitle={this.renderTitle}
          renderEntity={this.renderStarship}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.mainState.loading,
    starshipsData: state.mainState.starshipsData,
  };
};

export default connect(mapStateToProps)(Starships);
