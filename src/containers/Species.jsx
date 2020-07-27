import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Species extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDataAxios("speciesData", "species/", "name"));
  }

  renderTitle = ({ name }) => name;

  renderSpecies = ({ name, skin_colors, language }) => {
    return (
      <ul>
        <li>Name: {name}</li>
        <li>Skin colors: {skin_colors}</li>
        <li>Language: {language}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1>Species</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios(
                "speciesData",
                `species/?search=${e.target.value}`,
                "name"
              )
            );
          }}
        />
        <GridComponent
          loading={this.props.loading}
          currentData={this.props.speciesData}
          history={this.props.history}
          entityCategory="species"
          renderTitle={this.renderTitle}
          renderEntity={this.renderSpecies}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.mainState.loading,
    speciesData: state.mainState.speciesData,
  };
};

export default connect(mapStateToProps)(Species);
