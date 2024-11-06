import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h1>Cart List</h1>
      <ul className="cart-list">
        <li className="cart-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/896de240-a54b-40d3-8022-35339a424039/AIR+JORDAN+1+ZM+AIR+CMFT+2.png"
            alt=""
            width={"100px"}
          />
          <h1>Air Jordan 1 Zoom CMFT 2</h1>
          <div>
            <button>-</button>
            <span className="cart-item-quantity">3</span>
            <button>+</button>
          </div>
          <h2>MRP : ₹ 13 295.00</h2>
        </li>
        <li className="cart-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/896de240-a54b-40d3-8022-35339a424039/AIR+JORDAN+1+ZM+AIR+CMFT+2.png"
            alt=""
            width={"100px"}
          />
          <h1>Air Jordan 1 Zoom CMFT 2</h1>
          <div>
            <button>-</button>
            <span className="cart-item-quantity">3</span>
            <button>+</button>
          </div>
          <h2>MRP : ₹ 13 295.00</h2>
        </li>
        <li className="cart-item">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/896de240-a54b-40d3-8022-35339a424039/AIR+JORDAN+1+ZM+AIR+CMFT+2.png"
            alt=""
            width={"100px"}
          />
          <h1>Air Jordan 1 Zoom CMFT 2</h1>
          <div>
            <button>-</button>
            <span className="cart-item-quantity">3</span>
            <button>+</button>
          </div>
          <h2>MRP : ₹ 13 295.00</h2>
        </li>
      </ul>
      <h1 className="text-right">Total Price:₹ 13 295.00</h1>
      <Link to="/checkout" className="btn-2">Checkout</Link>
    </div>
  );
}

export default Cart;
