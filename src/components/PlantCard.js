import React, { useState } from "react";

function PlantCard({ plant, onNewPrice, onDelete }) {
  const [isSoldOut, setIsSoldOut] = useState(true);
  const { id, name, image, price } = plant;
  const [newPrice, setNewPrice] = useState(price);

  function handleStockButton() {
    setIsSoldOut(!isSoldOut);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((resp) => resp.json())
      .then((item) => onNewPrice(item));
  }

  function handleChange(e) {
    setNewPrice(e.target.value);
  }

  function handleClickDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    },
    )
      .then((resp) => resp.json())
      .then((item) => onDelete(id));
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="number" value={newPrice} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Update</button>
      </form>
      {isSoldOut ? (
        <button onClick={handleStockButton} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockButton}>Out of Stock</button>
      )}
      <button onClick={handleClickDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
