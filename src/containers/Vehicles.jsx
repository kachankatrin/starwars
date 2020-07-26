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
    this.props.dispatch(fetchDataAxios("vehiclesData", "vehicles", "name"));
  }

  renderTitle = ({ name }) => name;

  renderVehicle = ({model, manufacturer, vehicle_class}) => {
    return (
      <ul>
        <li>Model: {model}</li>
        <li>Vehicle class: {vehicle_class}</li>
        <li>Manufacturer: {manufacturer}</li>
      </ul>
    );
  };

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
                `vehicles?search=${e.target.value}`,
                "name"
              )
            );
          }}
        />
        <GridComponent
          loading={this.props.loading}
          currentData={this.props.vehiclesData}
          history={this.props.history}
          entityCategory="vehicles"
          renderTitle={this.renderTitle}
          renderEntity={this.renderVehicle}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.mainState.loading,
    vehiclesData: state.mainState.vehiclesData

  };
};

export default connect(mapStateToProps)(Vehicles);
