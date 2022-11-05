import React, { useState, useCallback } from "react";

const GeneralContext = React.createContext({
  cartModalState: false,
  toggleCartModal: () => {},
  disableCartModal: () => {},
  currencySelector: false,
  toggleCurrencySelector: () => {},
  disableCurrencySelector: () => {},
});

export const GeneralContextProvider = (props) => {
  // for cartModal
  const [cartModalState, setCartModalState] = useState(false);
  const toggleCartModal = () => {
    setCartModalState(!cartModalState);
  };
  const disableCartModal = useCallback(() => {
    setCartModalState(false);
  }, []);

  // for cartModal

  // for currency selector
  const [currencySelector, setCurrencySelector] = useState(false);
  const toggleCurrencySelector = () => {
    setCurrencySelector(!currencySelector);
  };
  const disableCurrencySelector = useCallback(() => {
    setCurrencySelector(false);
  }, []);
  // for currency selector

  return (
    <GeneralContext.Provider
      value={{
        cartModalState,
        toggleCartModal,
        disableCartModal,
        currencySelector,
        toggleCurrencySelector,
        disableCurrencySelector,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
