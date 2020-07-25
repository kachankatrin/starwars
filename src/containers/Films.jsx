import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";

class Films extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("filmsData", "films"));
  }
  render() {
    return (
      <div>
        <h1>Films</h1>
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.filmsData}
          films={this.props.mainState.filmsData}
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
export default connect(mapStateToProps)(Films);
