import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";

class Vehicles extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("vehiclesData", "vehicles"));
  }
  render() {
    return (<div>
        <h1>Vehicles</h1>
        <GridComponent loading={this.props.mainState.loading} currenteData={this.props.mainState.vehiclesData}/>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    mainState: state.mainState,
  };
};
export default connect(mapStateToProps)(Vehicles);