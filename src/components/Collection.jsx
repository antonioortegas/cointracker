import "../assets/styles/Collection.css";
import Coin from "../components/Coin.jsx";
import { useState } from "react";

function Collection({ collection }) {
  //load array from local storage
  let array = [];
  if (localStorage.getItem("array")) {
    array = JSON.parse(localStorage.getItem("array"));
  }
  const safariRenderHack = { opacity: 3 % 2 ? 1 : 0.99 };

  const [collectionArray, setCollectionArray] = useState(array);
  return (
    <>
      <div key={new Date()} style={safariRenderHack} className="collection" id="collection">
        <ul>
          {collection.map((coin) => (
            <li key={coin.id} className="coinCard" id="coinCard">
              <div id="coin-img">
                <Coin coin={coin} setCollectionArray={setCollectionArray} />
              </div>
              <div id="coin-name">
                <h3 id="countryName">{coin.country}</h3>
                <h3>{coin.year}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Collection;
