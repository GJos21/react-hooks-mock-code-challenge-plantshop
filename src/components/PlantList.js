import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ items, filterText, onNewPrice, onDelete }) {

  return (
    <ul className="cards">
      {items
        .filter((item) =>
          filterText === "" ? true : item.name.toUpperCase().includes(filterText.toUpperCase())
        )
        .map((item) =>
          <PlantCard key={item.id} plant={item} onNewPrice={onNewPrice} onDelete={onDelete} />
        )}
    </ul>
  );
}

export default PlantList;
