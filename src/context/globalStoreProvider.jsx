import store from "./storeContext";
import { useState } from "react";


const GlobalStoreProvider = (props) => {

  let [cart, setCart] = useState([]);
  let [mockUser, setMockUser] = useState({ id: 42, email: "bart@simpson.com"});
  let [order,setOrder] = useState([]);

  let createOrder = (prod) => {
    console.log("Order Created")
    let copy = [...order];
    setOrder(copy);

  }

  let addProdToCart = (prod) => {

    console.log('adding product to cart');
    //add prod to cart
    let copy = [...cart];
    copy.push(prod);
    setCart(copy);
  };

  let removeProdFromCart = (prod) => {
    console.log("removing prod");

    let copy = [...cart];
    copy.splice(prod, 1);
    setCart(copy);
  };

  return (
    <store.Provider 
    value={{
      cart: cart,
      user: mockUser,
      order: order,
      addProdToCart: addProdToCart,
      removeProdFromCart: removeProdFromCart,
      createOrder: createOrder,
    }}>
      {props.children}
    </store.Provider>
  );
};

export default GlobalStoreProvider;