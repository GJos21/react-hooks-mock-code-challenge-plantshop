import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ items, filterText }) {

  return (
    <ul className="cards">
      {items
        .filter((item) =>
          filterText === "" ? true : item.name.toUpperCase().includes(filterText.toUpperCase())
        )
        .map((item) =>
          <PlantCard key={item.id} plant={item} />
        )}
    </ul>
  );
}

export default PlantList;
