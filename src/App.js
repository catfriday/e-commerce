import React, { useEffect, useState } from "react";
import { commerce } from "./lib/Commerce.js";
import ProductsList from "./components/ProductsList";
import "./styles/style.scss";
import Hero from "./components/Hero";

const App = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState({});
  const [merchant, setMerchant] = useState({});

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

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((err) => {
        console.log("there was an error getching cart", error);
      });
  };

  return (
    <div className="app">
      <Hero merchant={merchant} />
      <ProductsList products={products} />
    </div>
  );
};

export default App;
