import './assets/styles/App.css'
import Header from './components/Header.jsx'
import Collection from './components/Collection.jsx'
import { useState } from 'react'

import { collection as json } from './data/collection.json'

function App() {
  //load array from local storage if it exists, otherwise create a new one and save it
  let array = []
  if(localStorage.getItem('collectionArray')) {
    array = JSON.parse(localStorage.getItem('collectionArray'))
  } else {
    array = Array(2048)
    localStorage.setItem('collectionArray', JSON.stringify(array))
    
  }

  let collection = json

  //each json element has a src property that is the path to the image, containing
  //"./coins/type/year/country.jpg"
  //for each image, we need to parse the json and from the src property, extract the country, year and type and add them as properties to the collection element
  collection.forEach((coin) => {
    let src = coin.src
    let country = src.split('/')[4].split('.')[0].toLocaleUpperCase()
    let year = src.split('/')[3]
    let type = src.split('/')[2]
    coin.country = country
    coin.year = year
    coin.type = type
  })


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