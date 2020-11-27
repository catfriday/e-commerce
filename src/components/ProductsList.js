import React from "react";
import ProductItem from "./ProductItem";

// const ProductsList = ({ products, onAddToCart }) => (
const ProductsList = (props) => (
  <div className="products" id="products">
    {props.products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCart={props.onAddToCart}
      />
    ))}
  </div>
);

export default ProductsList;
