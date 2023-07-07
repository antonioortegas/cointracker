import '../assets/styles/Coin.css'
import logo from '../assets/images/placeholderlogo.png'
import React from 'react'
import { useState } from 'react'


function Coin({coin, collectionArray, setCollectionArray}) {

    console.log(collectionArray[coin.id-1])
    console.log([coin.id-1])
    function changeCoinState() {
      collectionArray[coin.id-1] = !collectionArray[coin.id-1]
      console.log(collectionArray[coin.id-1])
      //save array to local storage
      localStorage.setItem('collectionArray', JSON.stringify(collectionArray))
    
      
    }
    return (
      collectionArray[coin.id-1] ?
      <>
        <div id='obtainedCoin' onClick={() => changeCoinState()}>
          <img src={"./src/assets/images/coins/coin1.jpg"} alt="" />
        </div>
      </>
      :
      <>
        <div id='unobtainedCoin' onClick={() => changeCoinState()}>
          <img src={"./src/assets/images/coins/coin1.jpg"} alt="" />
        </div>
      </>

    )
  }
  
export default Coin
