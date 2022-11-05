import React, { useContext } from "react";
import classes from "components/pages/cart/Cart.module.scss";
import { PaystackButton } from "react-paystack";

import CartContext from "context/cart-context";

function Cart() {
  const cartctx = useContext(CartContext);

  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.title}>
          <h1>CART</h1>
        </div>
        {cartctx.cartItems.length === 0 && (
          <p className="text-center">Cart is Empty</p>
        )}
        {cartctx.cartItems.map((item) => (
          <div className={classes.item_wrapper} key={item.id}>
            <div className={classes.first_column}>
              <p className={classes.name}>
                <span>{item.name.split(" ")[0]}</span>
                {item.name.replace(item.name.split(" ")[0], "")}
              </p>
              <p className={classes.amount}>${item.amount}</p>
              <p className={classes.size}>SIZE:</p>
              <div className={classes.sizes_wrapper}>
                {item.sizes.map((size) => (
                  <div key={size}>{size}</div>
                ))}
              </div>
              <p className={classes.color}>COLOR:</p>
              <div className={classes.colors_wrapper}>
                {item.colors.map((color) => (
                  <div
                    key={color}
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className={classes.second_column}>
              <div className={classes.column_one}>
                <div onClick={() => cartctx.onAdd(item)}>+</div>
                <div>{item.qty}</div>
                <div onClick={() => cartctx.onRemove(item)}>-</div>
              </div>
              <div className={classes.column_two}>
                <img src={item.image} alt={item.image} />
              </div>
            </div>
          </div>
        ))}
        <div className={classes.foot}>
          <p className={classes.tax}>
            Tax 21%: <span>${cartctx.tax.toFixed(2)}</span>
          </p>
          <p className={classes.quantity}>
            Quantity: <span>{cartctx.sumTotalQty}</span>
          </p>
          <p className={classes.total}>
            Total: <span>${cartctx.sumAfterTax.toFixed(2)}</span>
          </p>
          <div className={classes.order} onClick={() => {}}>
            <PaystackButton {...cartctx.componentProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
