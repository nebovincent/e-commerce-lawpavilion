import React, { useContext, useState } from "react";
import classes from "components/layouts/Nav.module.scss";
import { BiDollar, BiEuro, BiYen, BiChevronUp } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import icon from "images/icon.png";
import { useLocation, Link } from "react-router-dom";
import GeneralContext from "context/general-context";
import CartContext from "context/cart-context";

function Nav() {
  const gctx = useContext(GeneralContext);
  const cartctx = useContext(CartContext);
  const location = useLocation();
  const [activeCurrentCategory, setActiveCurrentCategory] = useState({
    women: false,
    men: false,
    kids: false,
  });

  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.category_list}>
          <div
            className={`${
              (activeCurrentCategory.women ||
                location.pathname === "/" ||
                location.pathname === "/women") &&
              classes.active
            }`}
            onClick={() => {
              setActiveCurrentCategory({
                women: true,
                men: false,
                kids: false,
              });
            }}
          >
            <Link to="/women">WOMEN</Link>
          </div>
          <div
            className={`${
              (activeCurrentCategory.men || location.pathname === "/men") &&
              classes.active
            }`}
            onClick={() => {
              setActiveCurrentCategory({
                women: false,
                men: true,
                kids: false,
              });
            }}
          >
            <Link to="/men">MEN</Link>
          </div>
          <div
            className={`${
              (activeCurrentCategory.kids || location.pathname === "/kids") &&
              classes.active
            }`}
            onClick={() => {
              setActiveCurrentCategory({
                women: false,
                men: false,
                kids: true,
              });
            }}
          >
            <Link to="/kids">KIDS</Link>
          </div>
        </div>
        <Link to="/" className={classes.icon}>
          <img src={icon} alt="icon" className={classes.icon} />
        </Link>

        <div className={classes.currency_switcher_and_cart}>
          <div
            className={classes.currency_switcher}
            onClick={gctx.toggleCurrencySelector}
          >
            <BiDollar className={classes.dollar_sign_icon} />
            <BiChevronUp className={classes.arrow_up_icon} />
          </div>
          <div
            className={classes.cart}
            onClick={() => {
              gctx.toggleCartModal();
            }}
          >
            <BsCart2 className={classes.cart_icon} />
            {cartctx.cartItems.length > 0 && (
              <div className={classes.cart_items_counter}>
                {cartctx.sumTotalQty}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
