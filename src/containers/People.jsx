import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";

class People extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("peopleData", "people"));
  }
  render() {
      console.log(this.props.mainState.peopleData.length && this.props.mainState.peopleData[0].name)
    return (<div>
        <h1>People</h1>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    mainState: state.mainState,
  };
};
export default connect(mapStateToProps)(People);
