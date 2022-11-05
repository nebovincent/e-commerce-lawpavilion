import React, { useState, useEffect } from "react";
import data from "data/data";
import srcConfigInfo from "config";

const CartContext = React.createContext({
  products: [],
  onAdd: () => {},
  onRemove: () => {},
  cartItems: [],
  sumTotal: 0,
  tax: 0,
  sumAfterTax: 0,
  sumTotalQty: 0,
  config: {},
  handlePaystackSuccessAction: () => {},
  handlePaystackCloseAction: () => {},
  componentProps: {},
});

export const CartContextProvider = (props) => {
  const { products } = data;
  useEffect(() => {}, []);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    let cart = [];
    if (exist) {
      cart = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(cart);
    } else {
      cart = [...cartItems, { ...product, qty: 1 }];
      setCartItems(cart);
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    let cart = [];
    if (exist.qty === 1) {
      cart = cartItems.filter((x) => x.id !== product.id);
      setCartItems(cart);
    } else {
      cart = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(cart);
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  // keeping track of total price of all in cart
  const [tax, setTax] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);
  const [sumAfterTax, setSumAfterTax] = useState(0);
  const [sumTotalQty, setSumTotalQty] = useState(0);

  useEffect(() => {
    const totalArray = cartItems.map((item) => item.amount * item.qty);
    function addAll(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    }
    const total = addAll(totalArray);
    const tax = (21 / 100) * total;
    setSumTotal(total);
    setTax((21 / 100) * total);
    setSumAfterTax(total + tax);

    const totalQtyArray = cartItems.map((item) => item.qty);
    const totalQty = addAll(totalQtyArray);
    setSumTotalQty(totalQty);
  }, [cartItems]);
  // keeping track of total price of all in cart

  // paystack
  const config = {
    reference: new Date().getTime().toString(),
    email: "nebov3@gmail.com",
    amount: sumAfterTax * 100,
    publicKey: srcConfigInfo.PaystackTestPubKey,
  };

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log(reference);
    alert("Purchase Successful");
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert("Don't go please!!!");
  };

  const componentProps = {
    ...config,
    text: "ORDER",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  // paystack

  // local storage
  const localStorgeCart = JSON.parse(localStorage.getItem("cartItems"));
  useEffect(() => {
    if (
      localStorgeCart?.length &&
      JSON.stringify(localStorgeCart) !== JSON.stringify(cartItems)
    ) {
      setCartItems(localStorgeCart);
    }
  }, [localStorgeCart, cartItems]);

  // local storage

  return (
    <CartContext.Provider
      value={{
        products,
        onAdd,
        onRemove,
        cartItems,
        sumTotal,
        tax,
        sumAfterTax,
        sumTotalQty,
        config,
        handlePaystackSuccessAction,
        handlePaystackCloseAction,
        componentProps,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
