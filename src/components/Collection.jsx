import '../assets/styles/Collection.css'
import Coin from '../components/Coin.jsx'
import { useState } from 'react'

function Collection({collection}) {

  //load array from local storage
  const array = JSON.parse(localStorage.getItem('collectionArray'))
  
  const [[collectionArray, setCollectionArray]] = useState([array])
  return (
    <>
        <div className="collection" id='collection'>
            <ul>
                {collection.map(coin => (
                  <li key={coin.id} className='coinCard'>
                      <div id='coin-img'>
                        <Coin coin={coin} collectionArray={collectionArray} setCollectionArray={setCollectionArray} />
                      </div>
                      <div id='coin-name'>
                        <h3>{coin.country}</h3>
                      </div>
                    </li>
                ))}
              
            </ul>
        </div>
    </>
  )
}

export default Collection