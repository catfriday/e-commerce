import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products, onAddToCart }) => (
  <div className="products" id="products">
    {products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

export default ProductsList;
