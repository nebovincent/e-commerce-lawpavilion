import React, { useContext } from "react";
import classes from "components/pages/CurrencySelector.module.scss";
import { BiDollar, BiEuro, BiYen } from "react-icons/bi";
import GeneralContext from "context/general-context";
import OutsideClickHandler from "react-outside-click-handler";

function CurrencySelector() {
  const gctx = useContext(GeneralContext);
  return (
    <>
      {gctx.currencySelector && (
        <div className={classes.currencySelector_overlay_wrapper}>
          <OutsideClickHandler onOutsideClick={gctx.disableCurrencySelector}>
            <div className={classes.main_wrapper}>
              <ul>
                <li>
                  <BiDollar /> USD
                </li>
                <li>
                  <BiEuro /> EUR
                </li>
                <li>
                  <BiYen /> JPY
                </li>
              </ul>
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </>
  );
}

export default CurrencySelector;
