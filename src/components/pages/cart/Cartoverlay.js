import React, { useContext } from "react";
import classes from "components/pages/cart/Cartoverlay.module.scss";
import GeneralContext from "context/general-context";
import CartContext from "context/cart-context";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { PaystackButton } from "react-paystack";

function Cartoverlay() {
  const gctx = useContext(GeneralContext);
  const cartctx = useContext(CartContext);

  return (
    <>
      {gctx.cartModalState && (
        <div className={classes.overlay_wrapper}>
          <OutsideClickHandler onOutsideClick={gctx.disableCartModal}>
            <div className={classes.cart_wrapper}>
              <h1 className={classes.title}>
                My Bag, <span>{cartctx.cartItems.length} Items</span>
              </h1>
              {cartctx.cartItems.length === 0 && (
                <p className="text-center">Cart is Empty</p>
              )}
              {cartctx.cartItems.map((item) => (
                <div className={classes.item_wrapper} key={item.id}>
                  <div className={classes.first_column}>
                    <h4 className={classes.name}>{item.name}</h4>
                    <p className={classes.amount}>${item.amount.toFixed(2)}</p>
                    <h4 className={classes.size}>Size:</h4>
                    <div className={classes.sizes_wrapper}>
                      {item.sizes.map((size) => (
                        <div key={size}>{size}</div>
                      ))}
                    </div>
                    <h4 className={classes.color}>Color:</h4>
                    <div className={classes.colors_wrapper}>
                      {item.colors.map((color) => (
                        <div
                          style={{ backgroundColor: `${color}` }}
                          key={color}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className={classes.second_column}>
                    <div onClick={() => cartctx.onAdd(item)}>+</div>
                    <div>{item.qty}</div>
                    <div onClick={() => cartctx.onRemove(item)}>-</div>
                  </div>
                  <div className={classes.third_column}>
                    <img src={item.image} alt={item.id} />
                  </div>
                </div>
              ))}
              <div className={classes.foot_wrapper}>
                <div className={classes.total_wrapper}>
                  <p>Total</p>
                  <p>${cartctx.sumTotal} </p>
                </div>
                <div className={classes.viewbag_and_checkout_wrapper}>
                  <Link to="/cart">
                    <div className={classes.viewbag}>VIEW BAG</div>
                  </Link>
                  <PaystackButton {...cartctx.componentProps} />
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </>
  );
}

export default Cartoverlay;
