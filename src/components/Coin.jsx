import '../assets/styles/Coin.css'
import logo from '../assets/images/placeholderlogo.png'
import React from 'react'
import { useState } from 'react'


//"./src/assets/images/coins/coin1.jpg"

function Coin({ coin, setCollectionArray}) {

  let array = []
  array = JSON.parse(localStorage.getItem('collectionArray'));


  function changeCoinState() {
    array[coin.id-1] = !array[coin.id-1]
    setCollectionArray(array)
    localStorage.setItem('collectionArray', JSON.stringify(array))
  }

  return (

    array[coin.id-1] ?
    <>
      <div id='obtainedCoin' onClick={changeCoinState}>
        <img src={coin.src} alt='' />
      </div>
    </>
    :
    <>
      <div id='unobtainedCoin' onClick={changeCoinState}>
        <img src={coin.src} alt='' />
      </div>
    </>
  );
}

export default Coin;

