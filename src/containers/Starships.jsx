import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Starships extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("starshipsData", "starships"));
  }
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
                `starships?search=${e.target.value}`
              )
            );
          }}
        />
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.starshipsData}
          starships={this.props.mainState.starshipsData}
          history={this.props.history}
          entetyCategory="starships"
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
export default connect(mapStateToProps)(Starships);
