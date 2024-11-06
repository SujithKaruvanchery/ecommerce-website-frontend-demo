import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <form className="text-right">
        <input type="text" placeholder="Search" className="input-1" />
        <input type="Submit" value="Submit" className="btn-1" />
      </form>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product, index) => {
          return (
            <Link to="/product-details/10" key={index}>
              <ProductCard product = {product}/>
            </Link>
          );
        })}
      </div>
      <div className="text-center">
        <button className="loadmore-btn">Load More</button>
      </div>
    </div>
  );
}

export default ProductList;
