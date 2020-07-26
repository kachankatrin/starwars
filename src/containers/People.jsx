import React from "react";
import "../App.css";
import {
  fetchDataAxios,
  handleModalOpen,
} from "../store/actions/Actions";
import { connect } from "react-redux";
import Search from "../components/Search";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";

class People extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("peopleData", "people"));
  }
  render() {
    return (
      <div>
        <h1>People</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios("peopleData", `people?search=${e.target.value}`)
            );
          }}
        />
        <MyVerticallyCenteredModal
          show={this.props.mainState.isModalOpen}
          onHide={(e) => this.props.dispatch(handleModalOpen(e))}
        />
        <GridComponent
          loading={this.props.mainState.loading}
          currenteData={this.props.mainState.peopleData}
          people={this.props.mainState.peopleData}
          history={this.props.history}
          entetyCategory="people"
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
