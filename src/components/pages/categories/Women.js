import React, { useContext } from "react";

import classes from "components/pages/categories/Women.module.scss";
import { BsCart2 } from "react-icons/bs";
import data from "data/data";
import CartContext from "context/cart-context";
import { useHistory } from "react-router-dom";

function Women() {
  const cartctx = useContext(CartContext);
  const { products } = data;
  const { push } = useHistory();

  return (
    <>
      <div className={classes.main_wrapper}>
        <h1>Category name</h1>
        <div className={`${classes.items_container}`}>
          <div className={`${classes.items_row}`}>
            {products.map((product) => (
              <div
                className={`${classes.item}`}
                key={product.id}
                onClick={() => {
                  push(`/pdp/${product.id}`);
                }}
              >
                <img src={product.image} alt={product.id} />
                <div className={classes.desc}>
                  <p>{product.name}</p>
                  <p>${product.amount.toFixed(2)}</p>
                </div>
                <div
                  className={`${classes.add_to_cart}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    cartctx.onAdd(product);
                  }}
                >
                  <BsCart2 className={classes.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
