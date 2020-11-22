import React, { useEffect, useState } from "react";
import { commerce } from "./lib/Commerce.js";

// import './style/scss/style.scss'
const App = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setproducts(products.data);
      })
      .catch((error) => {
        console.log("there was an error fetching the product", error);
      });
  };

  return <div className="app"></div>;
};

export default App;
