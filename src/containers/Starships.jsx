import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";

class Starships extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("starshipsData", "starships"));
  }
  render() {
    return (
      <div>
        <h1>Starships</h1>
        <GridComponent loading={this.props.mainState.loading} currenteData={this.props.mainState.starshipsData}/>

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
