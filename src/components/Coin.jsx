import '../assets/styles/Coin.css'
import logo from '../assets/images/placeholderlogo.png'
import React from 'react'
import { useState } from 'react'

//"./src/assets/images/coins/coin1.jpg"

function Coin({coin, collectionArray, setCollectionArray}) {

    
    function changeCoinState() {
      collectionArray[coin.id-1] = !collectionArray[coin.id-1]
      //save array to local storage
      localStorage.setItem('collectionArray', JSON.stringify(collectionArray))
    
      
    }
    return (
      collectionArray[coin.id-1] ?
      <>
        <div id='obtainedCoin' onClick={() => changeCoinState()}>
          <img src={logo} alt="" />
        </div>
      </>
      :
      <>
        <div id='unobtainedCoin' onClick={() => changeCoinState()}>
          <img src={logo} alt="" />
        </div>
      </>

    )
  }
  
export default Coin
