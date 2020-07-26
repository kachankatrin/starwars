import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Planets extends React.Component {

  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("planetsData", "planets", "name"));
  }

  renderPlanet = ({climate, terrain, gravity, diameter}) => {
    return (
      <ul>
        <li>Climate: {climate}</li>
        <li>Terrain: {terrain}</li>
        <li>Gravity: {gravity}</li>
        <li>Diameter: {diameter}</li>
      </ul>
    );
  };
  
  renderTitle = ({ name }) => name;

  render() {
    return (
      <div>
        <h1>Planets</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios("planetsData", `planets?search=${e.target.value}`, "name")
            );
          }}
        />
        <GridComponent
          loading={this.props.loading}
          currentData={this.props.planetsData}
          history={this.props.history}
          entityCategory="planets"
          renderEntity={this.renderPlanet}
          renderTitle={this.renderTitle}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.mainState.loading,
    planetsData: state.mainState.planetsData,
  };
};
export default connect(mapStateToProps)(Planets);
