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
          <div className="container cartz">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Item number</th>
                  <th scope="col">Name</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Qty</th>
                  <th scope="col">price per item</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {this.props.store.map(product => {
                  return (
                    <React.Fragment>
                      <tr>
                        <th>{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.Desc}</td>
                        <td>
                          {/* {product.qty} */}
                          <select
                            id="qty"
                            onChange={this.change(product.id)}
                            value={product.qty}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="+">5+</option>
                          </select>
                        </td>
                        <td>${product.price}</td>
                        <td>${product.amount.toFixed(2)}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th id="total" colspan="4" className="table-foot" />
                  <td>
                    <strong>Total Amount</strong>
                  </td>
                  <td>
                    {this.props.store
                      .reduce(function(a, b) {
                        return a + b["amount"];
                      }, 0)
                      .toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
            <a href="/" className="btn btn-primary mr-2">
              Back
            </a>
            <a
              href="#"
              className="btn btn-primary mr-2"
              onClick={() => {
                console.log(this.props);
                this.props.CLEAR();
              }}
            >
              clear items
            </a>
            <button className="btn btn-primary">Proceed</button>
          </div>
        </div>
      </React.Fragment>
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
    },

    EDIT: entry => {
      dispatch({ type: "EDIT", payload: entry });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cartz);
// export default Cartz;
