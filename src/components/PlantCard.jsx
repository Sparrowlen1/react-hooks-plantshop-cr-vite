import { useState } from 'react'

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false)

  function handleStockClick() {
    setIsSoldOut(true)
  }

  return (
    <div className="plant-card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {!isSoldOut ? (
        <button className="primary" onClick={handleStockClick}>
          In Stock
        </button>
      ) : (
        <button disabled>Out of Stock</button>
      )}
    </div>
  )
}

export default PlantCard