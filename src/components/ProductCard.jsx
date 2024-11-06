import React from "react";

function ProductCard(props) {
    const addToCart = ()=>{
        alert("Product Added")
    }
  return (
    <div>
      <div className="product-card">
        <img
          src={props.product.image}
          className="product-image"
        />
        <div className="product-details">
          <h1 className="product-title">{props.product.title}</h1>
          <h2 className="product-price">MRP : ₹ {props.product.price}</h2>
          <button className="btn-2" onClick={addToCart}>Add to Bag</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
