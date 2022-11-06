import React, { useContext } from "react";
import classes from "components/pages/ProductDetail.module.scss";
import { useParams } from "react-router-dom";
import CartContext from "context/cart-context";
import data from "data/data";

function ProductDetail() {
  const { products } = data;
  const cartctx = useContext(CartContext);
  let { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.first_column}>
          <div>
            <img src={product.image} alt={product.image} />
          </div>
          <div>
            <img src={product.image} alt={product.image} />
          </div>
          <div>
            <img src={product.image} alt={product.image} />
          </div>
        </div>
        <div className={classes.second_column}>
          <img src={product.image} alt={product.image} />
        </div>
        <div className={classes.third_column}>
          <h1 className={classes.name}>
            <span>{product.name.split(" ")[0]}</span>
            {product.name.replace(product.name.split(" ")[0], "")}
          </h1>
          <h4 className={classes.sizes}>SIZE:</h4>
          <div className={classes.sizes_wrapper}>
            {product.sizes.map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
          <h4 className={classes.color}>COLOR:</h4>
          <div className={classes.colors_wrapper}>
            {product.colors.map((color) => (
              <div style={{ backgroundColor: `${color}` }} key={color}></div>
            ))}
          </div>
          <h4 className={classes.price}>PRICE:</h4>
          <p className={classes.amount}>${product.amount.toFixed(2)}</p>
          <div
            className={classes.add_to_cart}
            onClick={() => {
              cartctx.onAdd(product);
            }}
          >
            ADD TO CART
          </div>
          <p className={classes.desc}>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
