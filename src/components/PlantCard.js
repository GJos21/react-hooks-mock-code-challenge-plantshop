import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(true);

  function handleStockButton() {
    setIsSoldOut(!isSoldOut);
  }

  const { name, image, price } = plant;
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button onClick={handleStockButton} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockButton}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
