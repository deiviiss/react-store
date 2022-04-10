import React, { useContext } from "react";

import Appcontext from "@context/AppContext";

import "@styles/OrderItem.scss";
import iconClose from "@icons/icon_close.png";

const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(Appcontext);

  const handleRemove = (product) => {
    removeFromCart(product, index);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={iconClose}
        alt="close"
        onClick={() => {
          handleRemove(product);
        }}
      />
    </div>
  );
};

export default OrderItem;
