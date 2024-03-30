import React from 'react'
import useAllCoinInfo from '../Hooks/useAllCoinInfi'

function CryptoCurrencies() {
  const data=useAllCoinInfo()
  return (
    <div>
      Crypto    
    </div>
  )
}

export default CryptoCurrencies
