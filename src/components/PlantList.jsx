import PlantCard from './PlantCard'

function PlantList({ plants }) {
  console.log('PlantList received:', plants)  
  console.log('Number of plants in PlantList:', plants.length)  
  
  return (
    <div className="plant-list">
      {plants.map(plant => {
        console.log('Rendering plant:', plant.name)  
        return <PlantCard key={plant.id} plant={plant} />
      })}
    </div>
  )
}

export default PlantList