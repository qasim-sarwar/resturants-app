import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar style={{ background: "#303030" }}>
        <Container>
          <h1 className="header">TOKYO RAMEN FINDER </h1>
          
        </Container>
      </Navbar>
    );
  }
}
export default Header;
