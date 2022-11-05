import React from "react";
import Nav from "components/layouts/Nav";
import classes from "components/layouts/Layout.module.scss";
import Cartoverlay from "components/pages/cart/Cartoverlay";
import CurrencySelector from "components/pages/CurrencySelector";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className={classes.main_wrapper}>
        {children}
        <Cartoverlay />
        <CurrencySelector />
      </div>
    </div>
  );
}

export default Layout;
