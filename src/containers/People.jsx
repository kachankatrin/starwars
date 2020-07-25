import React from "react";
import "../App.css";
import { fetchDataAxios, handleInput } from "../store/actions/Actions";
import { connect } from "react-redux";
import Search from "../components/Search";
import GridComponent from "../components/GridComponent";
import _ from "lodash";

class People extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("peopleData", "people"));
  }
  debounced = _.debounce((e) => {
    this.props.dispatch(fetchDataAxios("peopleData", `people?search=${e}`));
  }, 200, { 'leading': false });
  render() {
    return (
      <div>
        <h1>People</h1>
        <Search
          handleInput={(e) => {
            // this.props.dispatch(handleInput(e.target.value, "searchPeople"));
            this.debounced(e.target.value);
          }}
        //   handleClick={() => {
        //     this.props.dispatch(
        //       fetchDataAxios(
        //         "peopleData",
        //         `people?search=${this.props.mainState.searchPeople}`
        //       )
        //     );
        //   }}
        //   search={e.target.value}
        />
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.peopleData}
          people={this.props.mainState.peopleData}
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
export default connect(mapStateToProps)(People);
