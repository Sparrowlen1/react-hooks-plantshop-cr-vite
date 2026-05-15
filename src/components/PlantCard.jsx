import React from "react";

function PlantCard({ plant, onSoldOut }) {
  const isInStock = plant.inStock !== false;

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {isInStock ? (
        <button
          className="primary"
          onClick={() => onSoldOut(plant.id)}
        >
          In Stock
        </button>
      ) : (
        <button onClick={() => onSoldOut(plant.id)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;