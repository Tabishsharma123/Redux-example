import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { remove } from "../redux/Cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>CART PAGE</h3>
      <div className="cartwrapper">
        {cartitem.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="img" className="card-img" />
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>
            <button className="btn" onClick={() => handleremove(item.id)}>
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
