import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="products">
      <img
        className="product_name"
        src={product.media.source}
        alt={product.name}
      />
    </div>
  );
};

export default ProductItem;
