import React from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";
const API = "https://init-store.herokuapp.com/api/v1/products";

import "@styles/ProductList.scss";

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
