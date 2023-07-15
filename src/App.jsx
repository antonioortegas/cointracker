import './assets/styles/App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Collection from './components/Collection.jsx'
import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { collection as json } from './data/collection.json'

function App() {

  let currentCountry = ''
  if(localStorage.getItem('currentCountry')) {
    currentCountry = localStorage.getItem('currentCountry')
  }

  let collection = json
  const regex = /\_\d+$/;


  const [initialCollection] = useState(collection)
  const [filters, setFilters] = useState({
    country: currentCountry!="" ? currentCountry : 'all',
    year: 'all',
    type: 'all',
  })
  console.log(filters)

  //each json element has a src property that is the path to the image, containing
  //"./coins/type/year/country.jpg"
  //for each image, we need to parse the json and from the src property, extract the country, year and type and add them as properties to the collection element
  collection.forEach((coin) => {
    let src = coin.src
    let countrysrc =  src.split('/')[4].split('.')[0].toLocaleUpperCase()
    let country = countrysrc.replace(regex, '')
    let year = src.split('/')[3]
    let type = src.split('/')[2]
    coin.country = country
    coin.year = year
    coin.type = type
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
    <div className='bg'>

    </div>
      <Header />
      <Routes>
        <Route path="/cointracker" element={<Home setFilters={setFilters} />} />
        <Route path="/cointracker/collection" element={<Collection collection={filterCollection(collection)} />}/>
      </Routes>
    </>
  )
}

export default App