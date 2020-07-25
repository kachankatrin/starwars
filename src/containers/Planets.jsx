import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";

class Planets extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("planetsData", "planets"));
  }
  render() {
    return (
      <div>
        <h1>Planets</h1>
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.planetsData}
          planets={this.props.mainState.planetsData}
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
export default connect(mapStateToProps)(Planets);
