import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";

class Starships extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("starshipsData", "starships"));
  }
  render() {
    return (
      <div>
        <h1>Starships</h1>
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
