import React from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <div>
      <div className="product-card">
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/896de240-a54b-40d3-8022-35339a424039/AIR+JORDAN+1+ZM+AIR+CMFT+2.png"
          alt="Air Jordan 1 Zoom CMFT 2"
          className="product-image"
        />
        <div className="product-details">
          <h1 className="product-title">Air Jordan 1 Zoom CMFT 2</h1>
          <p className="product-category">Men's Shoes</p>
          <h2 className="product-price">MRP : ₹ 13 295.00</h2>
          <Link to="/cart" className="btn-2">
            Add to Bag
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
