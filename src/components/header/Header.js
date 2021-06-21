import React from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/algebra_crown.svg";

const Header = () => (
  <div className="header">
    <Link to="/" className="hlogo">
      <Logo />
    </Link>

    <div className="hsideGroup">
      <Link className="htitle" to='/shop' >Algebra Shop</Link>
      <Link className="htitle" to='/signin'>sign In</Link>
      <div>Cart</div>
    </div>
  </div>
);

export default Header;