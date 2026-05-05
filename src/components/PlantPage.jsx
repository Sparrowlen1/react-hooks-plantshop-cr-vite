import { useState, useEffect } from 'react'
import Header from './Header'
import NewPlantForm from './NewPlantForm'
import Search from './Search'
import PlantList from './PlantList'

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error))
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main>
      <Header />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  )
}

export default PlantPage