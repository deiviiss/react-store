import React, { useContext } from "react";
import "@styles/ProductItem.scss";

import addToCartImage from "@icons/bt_add_to_cart.svg";
import AppContext from "@context/AppContext";

// import product from "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ProductItem = ({ product }) => {
  // const [cart, setCar] = useState("");

  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={addToCartImage} alt="add-cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
