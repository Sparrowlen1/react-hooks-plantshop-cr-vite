import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH ALL PLANTS
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // ADD NEW PLANT
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // MARK PLANT AS SOLD OUT
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        return {
          ...plant,
          inStock: plant.inStock === false ? true : false,
        };
      }

      return plant;
    });

    setPlants(updatedPlants);
  }

  // SEARCH FILTER
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </main>
  );
}

export default PlantPage;