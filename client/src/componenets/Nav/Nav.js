import React, { Component } from "react";

import "./Nav.css";
import { connect } from "react-redux";
import { ADD } from "../../Redux/action/index.js";
class Nav extends Component {
  state = {
    qty: 0
  };
  render() {
    return (
      <React.Fragment>
        <nav className="nav fixed-top">
          <a className="navbar-brand" href="/">
            <span id="brandname">Redux Cart</span>
          </a>

          <a className="nav-item nav-link active" href="/">
            Home
          </a>
          <div className="nav-item nav-link active">
            <a href="/cart">
              <i className="fas fa-shopping-cart fa-2x" />
            </a>
            <div className="cartnumber">
              {/* {this.props.store.length} */}
              {this.props.store.reduce(function(a, b) {
                return a + b["qty"];
              }, 0)}
            </div>
          </div>
          <a href="/cart" className="btn btn-primary">
            Checkout
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log("entire state: \n", state);
  return {
    store: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ADD: item => {
      dispatch({
        type: "ADD",
        payload: item
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
