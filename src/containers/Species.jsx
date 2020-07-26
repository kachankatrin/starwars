import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Species extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("speciesData", "species"));
  }
  render() {
    return (
      <div>
        <h1>Species</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios("speciesData", `species?search=${e.target.value}`)
            );
          }}
        />
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.speciesData}
          species={this.props.mainState.speciesData}
          history={this.props.history}
          entetyCategory="species"
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
export default connect(mapStateToProps)(Species);
