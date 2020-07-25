import React from "react";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
import GridComponent from "../components/GridComponent";

class Species extends React.Component {
    componentDidMount() {
      console.log("mount");
      this.props.dispatch(fetchDataAxios("speciesData", "species"));
    }
    render() {
      return (<div>
          <h1>Species</h1>
          <GridComponent loading={this.props.mainState.loading} currenteData={this.props.mainState.speciesData}/>
      </div>);
    }
  }
  const mapStateToProps = (state) => {
    return {
      mainState: state.mainState,
    };
  };
  export default connect(mapStateToProps)(Species);