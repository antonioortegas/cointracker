import '../assets/styles/Collection.css'
import Coin from '../components/Coin.jsx'

function Collection({collection}) {

  return (
    <>
        <div className="collection" id='collection'>
            <ul>
                {collection.map(coin => (
                  <li key={coin.id}>
                      <div id='coin-img'>
                        <Coin />
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