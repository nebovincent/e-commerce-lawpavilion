import React, { useContext, useEffect } from "react";
import Kids from "components/pages/categories/Kids";
import Men from "components/pages/categories/Men";
import Women from "components/pages/categories/Women";
import LandingPage from "components/pages/LandingPage";
import { Switch, Route, useLocation } from "react-router-dom";
import Layout from "components/layouts/Layout";
import ProductDetail from "components/pages/ProductDetail";
import Cart from "components/pages/cart/Cart";
import GeneralContext from "context/general-context";

function App() {
  const { disableCartModal, disableCurrencySelector } =
    useContext(GeneralContext);
  // keep track of route changes to disable dropdowns
  const { pathname } = useLocation();

  useEffect(() => {
    // disableCartModal();
    // disableCurrencySelector();
  }, [pathname, disableCartModal, disableCurrencySelector]);
  // keep track of route changes to disable dropdowns[pathname]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/women">
          <Women />
        </Route>
        <Route path="/men">
          <Men />
        </Route>
        <Route path="/kids">
          <Kids />
        </Route>
        <Route path="/pdp/:id">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        {/* <Route path="*">
          <Redirect to="/" />
        </Route> */}
      </Switch>
    </Layout>
  );
}

export default App;
