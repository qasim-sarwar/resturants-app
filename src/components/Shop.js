import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";

class Shop extends Component {
  render() {
    return (
      <Card style={{ width: "22rem" }} bg="dark" className=" card text-white ">
        <br></br>
        <div className="row justify-content-md-left">
          <div className="col col-lg-10">{this.props.name}</div>
          <div className="col col-lg-2"><h4 className="text-right">{this.props.no}</h4></div>
        </div>
        <p>{this.props.address}</p> 
        <p><img style={{ width: "-webkit-fill-available" }} src={this.props.logo_image} /></p>
        <Row><Col>{this.props.genre}</Col></Row>
        <Row><Col>{this.props.budget}</Col>
        <div className="btn col-lg-6" ><p className="btn text-right" style={{ background: "#C06376" }}>Find Out More</p></div>
        </Row>
      </Card>
    );
  }
}
export default Shop;
