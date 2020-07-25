import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";

class Planets extends React.Component {
    componentDidMount() {
      console.log("mount");
      this.props.dispatch(fetchDataAxios("planetsData", "planets"));
    }
    render() {
      return (<div>
          <h1>Planets</h1>
      </div>);
    }
  }
  const mapStateToProps = (state) => {
    return {
      mainState: state.mainState,
    };
  };
  export default connect(mapStateToProps)(Planets);