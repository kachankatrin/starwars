import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";
import { debouncedDispatch } from "../utils";
import Search from "../components/Search";

class Films extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDataAxios("filmsData", "films/", "title"));
  }

  renderFilm = ({ episode_id, producer, release_date, director }) => {
    return (
      <ul>
        <li>Episode: {episode_id}</li>
        <li>Producer: {producer}</li>
        <li>Release: {release_date}</li>
        <li>Director: {director}</li>
      </ul>
    );
  };

  renderTitle = ({ title }) => title;

  render() {
    return (
      <div>
        <h1>Films</h1>
        <Search
          handleInput={(e) => {
            debouncedDispatch(
              this.props.dispatch,
              fetchDataAxios(
                "filmsData",
                `films/?search=${e.target.value}`,
                "title"
              )
            );
          }}
        />
        <GridComponent
          loading={this.props.loading}
          currentData={this.props.filmsData}
          history={this.props.history}
          entityCategory="films"
          renderEntity={this.renderFilm}
          renderTitle={this.renderTitle}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.mainState.loading,
    filmsData: state.mainState.filmsData,
  };
};

export default connect(mapStateToProps)(Films);
