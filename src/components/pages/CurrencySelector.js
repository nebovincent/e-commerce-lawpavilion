import React, { useContext } from "react";
import classes from "components/pages/CurrencySelector.module.scss";
import { BiDollar, BiEuro, BiYen, BiChevronUp } from "react-icons/bi";
import GeneralContext from "context/general-context";

function CurrencySelector() {
  const gctx = useContext(GeneralContext);
  return (
    <>
      {gctx.currencySelector && (
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
      )}
    </>
  );
}

export default CurrencySelector;
