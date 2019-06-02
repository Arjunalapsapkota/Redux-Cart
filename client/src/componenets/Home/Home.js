import React, { Component } from "react";
import Card from "../Card";
import Nav from "../Nav";
import "./Home.css";
const Products = require("./products.js").products;
class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Nav />

          <div className="container wrapper">
            {/* {console.log("list object:", Products)} */}
            {Products.map((product, key) => (
              <Card product={product} key={key} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
