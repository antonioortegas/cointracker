import './assets/styles/App.css'
import Header from './components/Header.jsx'
import Collection from './components/Collection.jsx'
import { useState } from 'react'

import { collection } from './data/collection.json'

function App() {
  const [year, setYear] = useState('2018')

  const [initialCollection] = useState(collection)
  const [filters, setFilters] = useState({
    country: 'all',
    year: 'all',
    type: 'all',
  })

  const filterCollection = (initialCollection) => {
    return initialCollection.filter(coin => {
      return (
        (coin.country.toLowerCase().startsWith(filters.country.toLowerCase()) || filters.country == "all") &&
        (parseInt(coin.year) == filters.year || filters.year == "all") &&
        (coin.type == filters.type || filters.type == "all")
      )
    })
  }


  return (
    <>
      <Header changeFilters={setFilters} />
      <Collection collection={filterCollection(collection)} />
    </>
  )
}

export default App