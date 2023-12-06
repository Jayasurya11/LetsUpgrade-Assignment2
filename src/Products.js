import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products">
      <Product
        name="Phillips Trimmer"
        price="850"
        url="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61VRH0jQrRL._SY450_.jpg"
      />
      <Product
        name="Apple MacBook"
        price="79990"
        url="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71TPda7cwUL._SX522_.jpg"
      />
      <Product
        name="Samsung Galaxy s23"
        price="59,999"
        url="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qGismu6NL._SX569_.jpg"
      />
    </div>
  );
};

export default Products;
