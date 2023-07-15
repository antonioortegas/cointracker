import "../assets/styles/Collection.css";
import Coin from "../components/Coin.jsx";
import { useState } from "react";

function Collection({ collection }) {
  //load array from local storage
  let array = [];
  if (localStorage.getItem("collectionArray")) {
    array = JSON.parse(localStorage.getItem("collectionArray"));
  } else {
    array = Array(2048);
  }

  const [collectionArray, setCollectionArray] = useState(array);
  return (
    <>
      <div className="collection" id="collection">
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
