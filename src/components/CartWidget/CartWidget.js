import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { Navbar, Nav } from 'react-bootstrap';

class CartWidget extends React.Component {
  render() {
    return <Nav.Link href="Cart"><BsFillCartFill /></Nav.Link>;
  }
}

export default CartWidget