import React, { Component } from "react";
import "./Card.css";
import { connect } from "react-redux";
import { ADD } from "../../Redux/action/index.js";

class Card extends Component {
  state = {};
  handleclick = event => {
    event.preventDefault();

    console.log("dispatching action..", {
      ...this.props.product,
      amount: this.props.product.price
    });
    this.props.ADD({ ...this.props.product, amount: this.props.product.price });
  };
  render() {
    const { name, Desc, image, price } = this.props.product;
    //requirig dynamically,
    //It is highly unlikely that we this methond in real app,
    //in production-app we get image url from the database, but for this example
    const imagesrc = require("../images/" + image);
    return (
      <div className="card_margin">
        <div className="card">
          <img className="card-img-top" src={imagesrc} alt="Card image cap" />
          <div className="card-body">
            <h6 className="card-title" style={{ flex: 1 }}>
              {name}
            </h6>
            <small className="card-text" style={{ flex: 1 }}>
              {Desc}
            </small>

            <strong style={{ flex: 1 }}>Price: ${price}</strong>

            <button
              className="btn btn-basic"
              onClick={this.handleclick}
              name={name}
              value={price}
              style={{ flex: 1, color: "blue" }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
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
    },
    CLEAR: () => {
      dispatch({ type: "CLEAR" });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
