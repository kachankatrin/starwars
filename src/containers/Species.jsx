import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";

class Species extends React.Component {
    componentDidMount() {
      console.log("mount");
      this.props.dispatch(fetchDataAxios("speciesData", "species"));
    }
    render() {
      return (<div>
          <h1>Species</h1>
      </div>);
    }
  }
  const mapStateToProps = (state) => {
    return {
      mainState: state.mainState,
    };
  };
  export default connect(mapStateToProps)(Species);