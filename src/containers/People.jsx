import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import Search from "../components/Search";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";

class People extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDataAxios("peopleData", "people/", "name"));
  }

  renderPeople = ({ eye_color, skin_color, hair_color, gender }) => {
    return (
      <ul>
        <li>Eyecolor: {eye_color}</li>
        <li>Skincolor: {skin_color}</li>
        <li>Haircolor: {hair_color}</li>
        <li>Gender: {gender}</li>
      </ul>
    );
  };

  renderTitle = ({ name }) => name;

  render() {
    return (
      <div>
        <h1>People</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios("peopleData", `people/?search=${e.target.value}`, "name")
            );
          }}
        />
        <GridComponent
          loading={this.props.loading}
          currentData={this.props.peopleData}
          history={this.props.history}
          entityCategory="people"
          renderEntity={this.renderPeople}
          renderTitle={this.renderTitle}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.mainState.loading,
    peopleData: state.mainState.peopleData,
  };
};

export default connect(mapStateToProps)(People);
