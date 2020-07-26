import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Vehicles extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("vehiclesData", "vehicles"));
  }
  render() {
    return (
      <div>
        <h1>Vehicles</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios(
                "vehiclesData",
                `vehicles?search=${e.target.value}`
              )
            );
          }}
        />
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.vehiclesData}
          vehicles={this.props.mainState.vehiclesData}
          history={this.props.history}
          entetyCategory="vehicles"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mainState: state.mainState,
  };
};
export default connect(mapStateToProps)(Vehicles);
