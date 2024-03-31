import React from 'react'
import { useParams } from 'react-router-dom'
import useAllCoinInfo from '../Hooks/useAllCoinInfi'
//Now i know the coinId whose data is to be fetched lets do it.....

function CryptoDetails() {
    const {coinId} =useParams();
    console.log(coinId)
    // const data=useAllCoinInfo(coinId)
    // console.log(data)
  return (
    <div>
      <h1>Crypto Details</h1>
      <p>{coinId}</p>
      <h1>Hey</h1>
    </div>
  )
}

export default CryptoDetails
Crypto