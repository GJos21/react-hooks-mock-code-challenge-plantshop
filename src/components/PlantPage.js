import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((list) => setPlants(list));
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleFilter(text) {
    setFilter(text);
  }

  function handleNewPrice(updatedPlant) {
    setPlants(plants.map((plant) => plant.id === updatedPlant.id ? updatedPlant : plant))
  }

  function handleDelete(id) {
    setPlants(plants.filter((plant) => plant.id !== id ? true : false))

  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onFilter={handleFilter} filterText={filter} />
      <PlantList items={plants} filterText={filter} onNewPrice={handleNewPrice} onDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
