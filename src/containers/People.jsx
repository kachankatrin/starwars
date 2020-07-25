import React from "react";
import "../App.css";
import { fetchDataAxios } from "../store/actions/Actions";
import { connect } from "react-redux";
// import Loader from "../components/Loader";
// import SingleCard from "../components/SingleCard";
import GridComponent from "../components/GridComponent"

class People extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.dispatch(fetchDataAxios("peopleData", "people"));
  }
  render() {
    return (
      <div>
        <h1>People</h1>
        {/* {!this.props.mainState.loading ? (
          this.props.mainState.peopleData.length ? (
            <ul className="starwarsData-grid">
              {this.props.mainState.peopleData.map((item) => (
                // <li>{item.name}</li>
                <SingleCard name={item.name} />
              ))}
            </ul>
          ) : (
            "no people"
          )
        ) : (
          <Loader />
        )} */}
        <GridComponent loading={this.props.mainState.loading} currenteData={this.props.mainState.peopleData} people={this.props.mainState.peopleData}/>
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
