import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Films extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("filmsData", "films"));
  }
  render() {
    return (
      <div>
        <h1>Films</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios("filmsData", `films?search=${e.target.value}`)
            );
          }}
        />
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.filmsData}
          films={this.props.mainState.filmsData}
          history={this.props.history}
          entetyCategory="films"
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
