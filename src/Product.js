import React from "react";

const Product = ({ name, price, url }) => {
  return (
    <div className="product">
      <img src={url} alt={name} />
      <h3>{name}</h3>
      <p>Price:{price}</p>
    </div>
  );
};

export default Product;
