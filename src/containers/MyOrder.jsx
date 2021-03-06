import React, { useContext } from "react";

import Appcontext from "@context/AppContext.js";
import OrderItem from "@components/OrderItem";

import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(Appcontext);

  const sumTotal = () => {
    //función que suma precios
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;

    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  console.log(state.cart);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item, index) => (
          <OrderItem product={item} key={index} index={index} />
        ))}
        {sumTotal() > 0 ? (
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
        ) : (
          <div className="order">
            <p>Not products add</p>
          </div>
        )}
        {sumTotal() > 0 ? (
          <button className="primary-button">Checkout</button>
        ) : null}
      </div>
    </aside>
  );
};

export default MyOrder;
