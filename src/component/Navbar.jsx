import React from "react";
import "../component/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div className="text-itm">
      <span>Redux Toolkit</span>
      <div>
        <Link className="navlink" to={"/"}>
          Home
        </Link>
        <Link className="navlink" to={"/cart"}>
          Cart
        </Link>
        <span className="text-meta">item:{items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
