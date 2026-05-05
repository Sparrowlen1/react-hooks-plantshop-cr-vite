import { useState, useEffect } from 'react'
import Header from './Header'
import NewPlantForm from './NewPlantForm'
import Search from './Search'
import PlantList from './PlantList'

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch plants on page load
useEffect(() => {
  fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched data:', data)  
      console.log('Number of plants:', data.length)  
      setPlants(data)
    })
}, [])

  // Add new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  // Filter plants based on search
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
  <main>
    <Header />
    <NewPlantForm onAddPlant={handleAddPlant} />
    <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    <PlantList plants={filteredPlants} />  {/* ← This line is key */}
  </main>
)
}

export default PlantPage