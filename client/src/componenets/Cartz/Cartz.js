import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD } from "../../Redux/action/index.js";
import Nav from "../Nav/Nav";
import "./Cartz.css";
class Cartz extends Component {
  change = id => event => {
    //this.setState({ status: true, value: event.target.value });
    let value = parseInt(event.target.value);

    let entry = { id, value };
    this.props.EDIT(entry);
  };
  render() {
    return (
      <React.Fragment>
        <div className="cartz-body">
          <Nav />
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     store: state
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     ADD: item => {
//       dispatch({
//         type: "ADD",
//         payload: item
//       });
//     },
//     CLEAR: () => {
//       dispatch({ type: "CLEAR" });
//     },

//     EDIT: entry => {
//       dispatch({ type: "EDIT", payload: entry });
//     }
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Cartz);
export default Cartz;
